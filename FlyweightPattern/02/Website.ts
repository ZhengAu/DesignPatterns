import { User } from "./User";

export abstract class Website {
	// 网站名
	private _name: string;

	public constructor(name: string) {
		this._name = name;
	}

	public getWebsiteInfo(user: User): void {

	}

	public get WebsiteName(): string {
		return this._name;
	}
}