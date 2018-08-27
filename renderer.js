const prompt = require('electron-prompt');
const fs = require('fs');
const $ = require('jquery');
const chromecast = require('electron-chromecast');
$(document).ready(run);


function run() {
	
	// when the list of casting devices is updated, we need to reject the previous
	// promise for selecting one of the devices.
	// this is the function to do that
	let cancelPreviousPromise;
	
	chromecast(function (receivers) {
		// create the promise for selecting a device
		let selectDevicePromise = new Promise((res, rej) => {
			
			// if we already have a promise going, reject that one, and keep
			// this new one open.
			if(cancelPreviousPromise)
				cancelPreviousPromise();

			// start creating the DOM with the device buttons
			let buttons = $('<div container></div>');

			// iterate over available devices
			for(let receiver of receivers) {
				let button = $(`
					<div button>
						<a href="#">${(receiver.friendlyName || receiver.service_fullname)}</a>
					</div>
				`);
				// give this button a listener that will resolve the selection promise
				button.on('click', _ => {
					res(receiver);
				});
				//add the button to the set of buttons
				buttons.append(button);
			}
			
			// create the deconstruction function
			cancelPreviousPromise = _ => {
				buttons.remove();
				rej();
			}

			// add buttons to the DOM
			$(document.body).append(buttons);
			

			
			// let chosenReceiver = receivers[response.trim()];
			// return chosenReceiver;
		});

		// return the device selection promise
		return selectDevicePromise;

		// debugger;
		// Do some logic to choose a receiver, possibly ask the user through a UI
	});
	console.log(chrome.cast.isAvailable);

}