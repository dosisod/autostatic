class autostatic {
	serverURL: string;
	data: any;

	constructor(url: string) {
		this.serverURL=url;
	}

	async get(id: string): Promise<any> {
		return this.fetcher("/get/"+id)
	}

	async set(id: string, data: string): Promise<any> {
		return this.fetcher("/set/"+id+"/"+data)
	}

	async fetcher(path: string): Promise<any> {
		return fetch(this.serverURL+path)
			.then(resp=>resp.json())
			.then(json=>{
				return json["data"]
			})
	}
}