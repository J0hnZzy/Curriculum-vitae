// Base module
import gulp from "gulp";
// Module import
import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/HTML_prepros.js"
import { plugins } from "./gulp/config/plugins.js"

global.app={
    path:   path,
    gulp:   gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
// старт сценарію за умовчанням
const dev = gulp.series(reset, mainTasks, watcher);
gulp.task('default', dev);