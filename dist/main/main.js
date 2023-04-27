"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const window_1 = require("./window");
const windowManager = new window_1.WindowManager();
function createWindow() {
    windowManager.createWindow();
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (windowManager.getWindow() === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map