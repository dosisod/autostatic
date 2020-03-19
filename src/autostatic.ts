import express from "express";
import HashMap from "hashmap";

import { RESTfulURL } from "./restful";

type Dict={[key: string]: any}

export default class autostatic {
	data: HashMap;

	constructor() {
		this.data=new HashMap();
	}

	parse(req: express.Response): Dict {
		const restful=new RESTfulURL(req.url);

		if (restful.command=="set") {
			return this.set(
				restful.param[0],
				restful.param[1]
			);
		}
		else if (restful.command=="get") {
			return {
				"data": this.data.get(restful.param[0]) || false
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