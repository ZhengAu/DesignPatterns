import { Mediator } from "./Mediator";
import { Colleague } from "./Colleague";
import { ConcreteColleague1, ConcreteColleague2 } from "./ConcreteColleague";

/**
 * 具体中介者
 */
export class ConcreteMediator extends Mediator {
	public concreteC1: ConcreteColleague1;
	public concreteC2: ConcreteColleague2;

	public setConcrete1(concrete: ConcreteColleague1): void {
		this.concreteC1 = concrete;
	}

	public setConcrete2(concrete: ConcreteColleague2): void {
		this.concreteC2 = concrete;
	}

	public send(msg: string, colleague: Colleague): void {
		if (colleague == this.concreteC1) {
			this.concreteC2.notify(msg);
		} else if (colleague == this.concreteC2) {
			this.concreteC1.notify(msg);
		}
	}

}