export class RESTfulURL {
	readonly command: string;

	readonly param: string[];
	readonly length: number;

	constructor(url: string) {
		const splited=this.split(url);

		this.command=splited[0];
		this.param=splited.slice(1);
		this.length=this.param.length;
	}

	split(url: string): string[] {
		const segmented=url.split("/");
		segmented.splice(0, 1);

		return segmented;
	}
}
