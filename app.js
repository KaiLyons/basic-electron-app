var electron = require('electron');
var { app, BrowserWindow } = electron;

app.on('ready', () =>{
    let win = new BrowserWindow({ height: 400, width: 400, frame: false, resizable: false });

    win.loadFile('app.index.html');

    win.on('close', () => {
        win = null;
    });
});