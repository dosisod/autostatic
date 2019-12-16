type Dict={[key: string]: any}

export class autostatic {
	data: Dict;

	constructor() {
		//all shared data objects
		this.data={
			"url1": "hit url1",
			"url2": "hit url2"
		};
	}

	parse(req): Dict {
		const strippedUrl=req.url.substr(1);

		return {
			"data": this.data[strippedUrl] || false
		};
	}
}