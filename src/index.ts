import { express } from "express";

import { HashMap } from "hashmap";

type Dict={[key: string]: any}

export class autostatic {
	data: HashMap;

	constructor() {
		this.data=new HashMap();
	}

	parse(req: express.Response): Dict {
		let segmentedURL=req.url.split("/")
		segmentedURL.splice(0, 1);

		if (segmentedURL[0]=="set") {
			return this.set(
				segmentedURL[1],
				segmentedURL[2]
			);
		}
		else if (segmentedURL[0]=="get") {
			return {
				"data": this.data.get(segmentedURL[1]) || false
			}
		}

		return {
			"data": false,
		};
	}

	set(key: string, value: string): Dict {
		if (!key || !value) {
			return {
				"success": false,
				"status": "missing key/value"
			};
		}

		this.data.set(key, value)

		return {
			"status": "added",
			"success": true
		};
	}
}