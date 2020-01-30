import { UnitedNations } from "./UnitedNations";

/**
 * 国家抽象类
 */
export class Country {
	// 中介者
	public mediator: UnitedNations;

	public constructor(mediator: UnitedNations) {
		this.mediator = mediator;
	}

	public deal(msg: string): void {

	}

	public showMessage(msg: string, whom: Country): void {

	}
}