const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isWindows = process.platform === "win32";

const createBrowserWindow = winOpts => {
  const opts = Object.assign({
    width: 1024, height: 768, show: false
  }, winOpts);

    const win = new BrowserWindow(opts);

  win.loadURL(path.join("file://", __dirname, "/src/index.html"));
  win.webContents.on('did-finish-load', function() {
  });

  win.once('ready-to-show', () => {
      win.show();
  });

  win.on("close", () => {
    console.log("window closed");
  });
  win.openDevTools();

};

const appOnReady = () => {
  createBrowserWindow();
};

app.on("ready", appOnReady);