require('electron-chromecast');

// castConsole.log = console.log;
// castConsole.info = console.log;
// castConsole.warn = console.log;
// castConsole.error = console.log;

chrome.cast.initialize({
	receiverListener: (a, b, c) => {
		chrome.cast.requestSession(_ => {
			console.log('requestSession: success', _);
		}, _ => {
			console.log('requestSession: fail', _);
		});
	},
	sessionListener: _ => {
		console.log(_);
		debugger;
	},
	// sessionRequest: new chrome.cast.SessionRequest('794B7BBF') // hello world
	sessionRequest: new chrome.cast.SessionRequest('D31696B2') // custom receiver
	// sessionRequest: new chrome.cast.SessionRequest('7A566E83') // default receiver
	
}, _=>{
	debugger;
}, _=> {
	debugger;
})
