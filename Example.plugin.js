//META{"name":"Example","displayName":"Example Plugin"}*//

class Example {
	//misc
	unload() { }
	constructor() { }
	initialize() { }
	onMessage() { } 
	observer(e) { } 
	onSwitch() { }
	load() { } 

	//meta
	getName() { return "Example"; }
	getDescription() { return "123456789"; }
	getVersion() { return "1.0"; }
	getAuthor() { return "Forprix"; }

	//html options for plugin
	getSettingsPanel() {
		return "<b>Enter something: </b><input></input>"
	}
	//enabling plugin
	start() {
        	console.log(`${this.getName()} start()`)
	}
	//disabling plugin
	stop() {
        	console.log(`${this.getName()} stop()`)
	}

}

