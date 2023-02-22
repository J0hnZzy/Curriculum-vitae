// Отримання назви папки проекту

import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Можна користуватися папкою rootFolder
const srcFolder = `./src`;


export const path  = {
    build: {
        files: `${buildFolder}/files/`,
        html : `${buildFolder}/`
    },
    src:  {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ` `
}