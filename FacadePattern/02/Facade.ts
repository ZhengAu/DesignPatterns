/**
 * 外观模式（Facade）
 * 为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，
 * 这个接口使得这一子系统更加容易使用。
 */

import { Shock } from "../01/Shock";
import { ConcreteShock1, ConcreteShock2, ConcreteShock4, ConcreteShock3 } from "../01/ConcreteShock";

export class Facade1 {
	protected facadeList: Shock[] = [];

	public constructor() {
		this.facadeList.push(new ConcreteShock1());
		this.facadeList.push(new ConcreteShock2());
		this.facadeList.push(new ConcreteShock4());
	}

	facadeBuy(): void {
		this.facadeList.forEach(item => {
			item.buy();
		});
	}

	facadeSell(): void {
		this.facadeList.forEach(item => {
			item.sell();
		})
	}
}


export class Facade2 {
	protected facadeList: Shock[] = [];

	public constructor() {
		this.facadeList.push(new ConcreteShock2());
		this.facadeList.push(new ConcreteShock3());
		this.facadeList.push(new ConcreteShock4());
	}

	facadeBuy(): void {
		this.facadeList.forEach(item => {
			item.buy();
		});
	}

	facadeSell(): void {
		this.facadeList.forEach(item => {
			item.sell();
		})
	}
}
