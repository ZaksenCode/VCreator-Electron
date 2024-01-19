const { app, BrowserWindow } = require('electron')
const path = require("path")
const fs = require("fs")

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 573,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
      },
      icon: path.join(__dirname, 'art/icon.png'),
      resizable: false
    })

    win.setTitle("VCreator 0.2");
    win.setMenuBarVisibility(false);
    win.webContents.openDevTools();
  
    win.loadFile('src/index.html');
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

try {
    require('electron-reloader')(module)
  } catch (_) {}