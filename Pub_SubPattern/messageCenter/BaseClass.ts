/**
 * 基础类
 */
export class BaseClass {
	public constructor() {}

	public static ins(): any {
		let Class: any = this;
		if (!Class._instance) {
			Class._instance = new Class();
		}
		return Class._instance;
	}
}
