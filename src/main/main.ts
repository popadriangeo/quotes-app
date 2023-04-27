import { app } from 'electron';
import { WindowManager } from './window';

const windowManager = new WindowManager();

function createWindow() {
  windowManager.createWindow();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (windowManager.getWindow() === null) {
    createWindow();
  }
});