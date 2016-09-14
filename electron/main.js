/* eslint-disable no-console */
// const electron = require('electron');
import { app, BrowserWindow } from 'electron';

// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', () => {
  console.log('ready!');

  mainWindow = new BrowserWindow({
    height: 1100,
    width: 1800
  });

  mainWindow.openDevTools();

  mainWindow.loadURL(`file://${ __dirname }/main.html`);

  mainWindow.on('closed', () => {
    console.log('application closed...');
    mainWindow = null;
  });
});
