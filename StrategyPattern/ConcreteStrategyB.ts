import {IStrategy} from "./IStrategy";

export class ConcreteStrategyB implements IStrategy {

	public algorithmMethod(): void {
		console.log(`This is class ConcreteStrategyB.`);
	}
}