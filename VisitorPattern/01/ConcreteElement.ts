import { IElement } from './IElement'
import { IVisitor } from './IVisitor';

/**
 * 具体的对象（如对应男人和女人两种类别）
 */
export class ConcreteElementA implements IElement {
	public _name: string = 'concreteElementA';

	public getName(): string {
		return this._name;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitConcreteElementA(this);
	}
}

export class ConcreteElementB implements IElement {
	public _name: string = 'concreteElementB';

	public getName(): string {
		return this._name;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitConcreteElementB(this);
	}
}