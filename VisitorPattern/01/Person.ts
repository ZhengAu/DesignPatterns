import { Action } from "./Action";

/**
 * 抽象人类
 */
export abstract class Person {
	public abstract acceptAction(action: Action): void;
}

export class Man extends Person {
	public acceptAction(action: Action): void {
		action.getManAction(this);
	}
}

export class Woman extends Person {
	public acceptAction(action: Action): void {
		action.getWomanAction(this);
	}
}