import { IVisitor } from "./IVisitor";
import { ConcreteElementA, ConcreteElementB } from "./ConcreteElement";

/**
 * 某种行为，如男人和女人对成功（失败）等的一种行为反应
 */
export class ConcreteVisitor1 implements IVisitor {
	public visitConcreteElementA(element: ConcreteElementA): void {
		console.log(`visitConcreteElementA --- ${element.getName()}`);
	}

	public visitConcreteElementB(element: ConcreteElementB): void {
		console.log(`visitConcreteElementB --- ${element.getName()}`);
	}
}