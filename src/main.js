const { app, BrowserWindow } = require('electron');
const path = require("path");
const fs = require("fs");

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 573,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        nodeIntegrationInWorker: true
      },
      icon: path.join(__dirname, 'art/icon.png'),
      resizable: false
    })

    win.setTitle("VCreator 0.2");
    win.setMenuBarVisibility(false);
    win.webContents.openDevTools();
  
    win.loadFile('src/index.html');

    win.addListener("DOMContentLoaded", (event) => {
      document.getElementById("browse-button").addListener("click", openContentPage("content-project"));
      document.getElementById("block-button").addtListener("click", openContentPage("content-block"));
    })
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

  function openContentPage(id) {
    hideAllPages()
    page = document.getElementById(id);
    content_project.classList.toggle("hide");
}
  
function hideAllPages() {
    content_project = document.getElementById("content-project");
    content_block = document.getElementById("content-block");
    content_script = document.getElementById("content-script");
    content_project.classList.add("hide");
    content_block.classList.add("hide");
    content_script.classList.add("hide");
}
