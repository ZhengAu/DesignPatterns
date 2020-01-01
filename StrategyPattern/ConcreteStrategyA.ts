import {IStrategy} from "./IStrategy";

export class ConcreteStrategyA implements IStrategy {
	public algorithmMethod(): void {
		console.log(`This is class ConcreteStrategyA.`);
	}
}