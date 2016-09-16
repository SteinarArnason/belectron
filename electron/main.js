/* eslint-disable no-console */
import { app, BrowserWindow } from 'electron'; // eslint-disable-line

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

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }

  mainWindow.loadURL(`file://${ __dirname }/main.html`);

  mainWindow.on('closed', () => {
    console.log('application closed..');
    mainWindow = null;
  });
});
