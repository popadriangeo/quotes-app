import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';
import * as url from 'url';

export class WindowManager {
  private mainWindow: BrowserWindow | null;

  constructor() {
    this.mainWindow = null;
  }

  createWindow(options?: BrowserWindowConstructorOptions): void {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
      ...options,
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, '/../renderer/index.html'),
      protocol: 'file:',
      slashes: true,
    });

    this.mainWindow.loadURL(startUrl);

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  getWindow(): BrowserWindow | null {
    return this.mainWindow;
  }

  closeWindow(): void {
    if (this.mainWindow) {
      this.mainWindow.close();
    }
  }
}