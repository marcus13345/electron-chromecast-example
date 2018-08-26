const prompt = require('electron-prompt');
const fs = require('fs');
const $ = require('jquery');
const Vault = require('./Vault.js');
const chromecast = require('electron-chromecast');
const config = new Vault();

// $(document).ready(run);
run();
function run() {
	
	// ES5
	
	chromecast(async function (receivers) {
		let str = ""
		for(let receiver of receivers) {
			str += (receiver.friendlyName || receiver.service_fullname) + "\n"
		}
		
		let response = await prompt({
			label: str
		});

		
		let chosenReceiver = receivers[response.trim()];
		return chosenReceiver;

		// debugger;
		// Do some logic to choose a receiver, possibly ask the user through a UI
	});
	console.log(chrome.cast.isAvailable);

}

setTimeout(_ => {
	let a = chrome.cast.requestSession(_ => {
		debugger;
	}, _ => {
		debugger;
	});
	// debugger;
	console.log(a);
}, 500)