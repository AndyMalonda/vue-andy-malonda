# vue-andy-malonda

So far, this is a simple Vue 3 project that uses Vite as a build tool. It is a personal project that I use to learn Vue.

But, while learning, I also want to make this project a template for everyone who wants to make a simple one page portfolio website. I will add more features and components in the future.

## Features

### Dynamic Resume (WIP)

#### Schema

I adapted the schema from [JSON Resume](https://jsonresume.org/).

It is mainly the same, but I made some changes to add more details.

You can find the schema in the `src\assets\resumeSchema.json` folder.

And paste it in the `src\assets\resume.json` file.

#### Components

- [ ] Header
- [ ] Footer
- [ ] Presentation
- [x] Experience
- [ ] Education
- [ ] Skills
- [x] Projects
- [ ] Contact

#### Features

- [x] Add a JSON file to store resume data.
- [x] Create a component that reads the JSON file and displays the resume data.
- [ ] Add a button to download the resume as a PDF.
- [ ] Add a button to change the theme.
- [ ] Add a button to change the language.

### Build, purge and deploy to FTP

I developed an npm package to automatically build and deploy the project to an FTP server.

You can configure deploy.config.js directly or use a .env file to your FTP server and then run the following command:

```sh
npm run deploy
```

More information about the deploy script can be found on GitHub: [ftp-deploy-vue](https://github.com/AndyMalonda/ftp-deploy-vue)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
