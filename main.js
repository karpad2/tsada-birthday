const { app, BrowserWindow,Menu  } = require('electron');
const { autoUpdater } = require('electron-updater');

function createWindow () {
    const win = new BrowserWindow({
      width: 1400,
      height: 720,
      webPreferences: {
        nodeIntegration: true
      },
      autoHideMenuBar: true
    });
  
    // Load your existing HTML file
    win.loadFile('./dist/index.html');
  }
  
  app.whenReady().then(createWindow);
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      //createWindow();
    }
  });

app.whenReady().then(() => {
  //createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

// Optional: Listen for update events
autoUpdater.on('update-available', () => {
  // Notify or log that an update is available
});

autoUpdater.on('update-downloaded', () => {
  // Notify or log that the update will be installed
});