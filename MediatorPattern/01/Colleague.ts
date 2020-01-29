import { Mediator } from "./Mediator";

/**
 * 抽象同事类
 */
export abstract class Colleague {
	/** 中介者 */
	public mediator: Mediator;

	public constructor(mediator: Mediator) {
		this.mediator = mediator;
	}

	public sendMsg(msg: string): void {

	}

	public notify(msg: string): void {

	}
}