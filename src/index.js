class autostatic {
	constructor() {
		//all shared data objects
		this.data={
			"url1": "hit url1",
			"url2": "hit url2"
		};
	}

	parse(req) {
		//remove leading "/" from url
		const url=req.url.substr(1);

		//for the time being, only return the data associated with the url
		return {
			"data": this.data[url] || false
		};
	}
}

module.exports=autostatic;