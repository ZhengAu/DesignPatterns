
export class User {
	// 用户名
	private _username: string;

	public constructor(username: string) {
		this._username = username;
	}

	public get Username(): string {
		return this._username;
	}
}