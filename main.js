// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const localhost = 'http://localhost:3000'


app.commandLine.appendSwitch('allow-insecure-localhost', 'true')
app.commandLine.appendSwitch('ignore-certificate-errors')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })

  // and load the index.html of the app.
  mainWindow.setMenu(null)
  mainWindow.loadURL(localhost)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    if (url === localhost) {
      // Verification logic.
      event.preventDefault()
      callback(true)
    } else {
      callback(false)
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.