import { Request } from "./Request";

/**
 * 管理者基类
 */
export class Manager {
	public username: string = '';

	public superior: Manager;

	public constructor(username: string) {
		this.username = username;
	}

	public setSuperior(superior: Manager): void {
		this.superior = superior;
	}

	public requestApplication(req: Request): void {

	}
}