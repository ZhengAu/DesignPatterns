import { IVisitor } from "./IVisitor";

/**
 * 具体对象的接口
 */
export interface IElement {
	_name: string;
	getName(): string;
	accept(visitor: IVisitor): void;
}