import 'dotenv/config';
import ftp from 'basic-ftp';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name (equivalent to __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await connectToFtp(client);
        await navigateToDirectory(client);
        await purgeDirectory(client);
        await uploadDistDirectory(client);
        console.log('Deployment complete!');
    } catch (err) {
        console.error('Deployment failed:', err);
    } finally {
        client.close();
    }
}

async function connectToFtp(client) {
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false
        });
        console.log('Connected to FTP server');
    } catch (err) {
        throw new Error('Failed to connect to FTP server: ' + err.message);
    }
}

async function navigateToDirectory(client) {
    try {
        await client.cd(process.env.FTP_PATH);
        console.log(`Navigated to directory: ${process.env.FTP_PATH}`);
    } catch (err) {
        throw new Error('Failed to navigate to directory: ' + err.message);
    }
}

async function purgeDirectory(client) {
    try {
        const files = await client.list();
        for (const file of files) {
            if (file.isDirectory) {
                await client.removeDir(file.name);  // Recursively remove directories
            } else {
                await client.remove(file.name);  // Remove files
            }
        }
        console.log('Purged directory');
    } catch (err) {
        throw new Error('Failed to purge directory: ' + err.message);
    }
}

async function uploadDistDirectory(client) {
    const dist = path.join(__dirname, 'dist');
    try {
        console.log(`Uploading entire directory: ${dist}`);
        await client.uploadFromDir(dist);  // This will upload the entire directory including subdirectories
    } catch (err) {
        throw new Error('Failed to upload directory: ' + err.message);
    }
}

deploy();