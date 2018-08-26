
const fs = require('fs');
const path = require('path');

class Vault {
	constructor(filename = 'config.json') {
		this._filepath = path.normalize(filename);
		if(fs.existsSync('config.json')) {
			
		}
		this.save();
	}

	async save() {
		await new Promise(res => {
			fs.writeFile(this._filepath, JSON.stringify(this, null, 2), (err) => {
				res();
			})
		})
	}


}

module.exports = Vault;