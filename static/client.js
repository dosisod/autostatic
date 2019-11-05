//file to be used for a static site to communicate with AS

class autostatic {
	constructor(url) {
		//current state of the be used by the system
		this.state=undefined;

		//url of the AS server
		this.url=url;
	}

	get data() {
		return this.state;
	}

	set data(data) {
		this.state=data;

		fetch(this.url).then(function(e) {
			console.log("TBD")
		})
	}
}
