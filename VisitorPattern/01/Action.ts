import { Man, Woman } from "./Person";

/**
 * 状态抽象类
 */
export abstract class Action {
	public abstract getManAction(man: Man): void;

	public abstract getWomanAction(woman: Woman): void;
}

/**
 * man,woman对待成功的状态
 */
export class Success extends Action {
	public getManAction(man: Man): void {
		console.log(`男人对待成功的态度 --- `);
	}

	public getWomanAction(woman: Woman): void {
		console.log(`女人对待成功的态度 --- `);
	}
}

/**
 * man,woman对待失败的状态
 */
export class Failure extends Action {
	public getManAction(man: Man): void {
		console.log(`男人对待失败的态度 --- `);
	}

	public getWomanAction(woman: Woman): void {
		console.log(`女人对待失败的态度 --- `);
	}
}