const path = require('path');
const electron = require('electron');
const fs = require('fs');
const express = require('express');
const app = express();
let receiverServer = null;

if (typeof electron === 'string') {
	spawnElectron()
	startReceiverServer()
}
else electron.app.on('ready', run)

function spawnElectron() {
	let {spawn} = require('child_process');
	let filepath = (process.argv[1]);
	let electronProcess = spawn(electron, [filepath, ...process.argv.slice(2)], {
		stdio: 'inherit'
	})

	electronProcess.on('close', _ => {
		stopReceiverServer();
	})
}

function run() {
	let {BrowserWindow} = electron;

	
	// console.log(electron)
	let window = new BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		},
		width: 400,
		height: 300
	});

	window.loadURL(path.join(__dirname, 'index.html'));
	window.setMenu(null);
	window.setTitle('Available Casting Devices');
	// window.webContents.toggleDevTools();

	window.on('close', _ => process.exit(0));

}

function startReceiverServer() {
	app.get('/receiver.html', (req, res) => {
		console.log(req.headers);
		res.statusCode = 200;
		res.end(fs.readFileSync('Receiver.html'))
	});
	receiverServer = app.listen(8080);
}

function stopReceiverServer() {
	if(receiverServer !== null)
		receiverServer.close();
}