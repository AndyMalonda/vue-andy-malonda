const getIcon = (iconName) => {
    // if there is a '.' in the iconName, take the first part
    if (iconName.includes('.')) {
        iconName = iconName.split('.')[0];
    }
    console.log(`Importing icon: Icon${iconName}.vue`);
    return import(`../icons/Icon${iconName}.vue`);
};

export { getIcon };