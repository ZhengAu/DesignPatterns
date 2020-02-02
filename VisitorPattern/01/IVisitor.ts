import { ConcreteElementA, ConcreteElementB } from "./ConcreteElement";

/**
 * 访问者接口
 */
export interface IVisitor {
	visitConcreteElementA(element: ConcreteElementA): void;
	visitConcreteElementB(element: ConcreteElementB): void;
}