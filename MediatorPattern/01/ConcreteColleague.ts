import { Colleague } from "./Colleague";

/**
 * 具体同事
 */
export class ConcreteColleague1 extends Colleague {
	// 具体同事调用中介者通知另外的同事
	public sendMsg(msg: string): void {
		console.log(`ConcreteColleague1 sent the message:`);
		this.mediator.send(msg, this);
	}

	public notify(msg: string): void {
		console.log(`ConcreteColleague1 received the message --- ${msg}`);
	}
}

export class ConcreteColleague2 extends Colleague {
	public sendMsg(msg: string): void {
		console.log(`ConcreteColleague2 sent the message:`);
		this.mediator.send(msg, this);
	}

	public notify(msg: string): void {
		console.log(`ConcreteColleague2 received the message --- ${msg}`);
	}
}