/* eslint-disable no-console */
import { app, BrowserWindow } from 'electron'; // eslint-disable-line

// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  console.log('ready! ✅');

  mainWindow = new BrowserWindow({
    height: 1100,
    width: 1800
  });

  mainWindow.openDevTools();

  mainWindow.loadURL(`file://${ __dirname }/main.html`);

  mainWindow.on('closed', () => {
    console.log('application closed..');
    mainWindow = null;
  });
});
