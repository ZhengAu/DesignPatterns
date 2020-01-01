import {IStrategy} from "./IStrategy";

export class StrategyContext {
	private strategy: IStrategy;

	public constructor(strategy: IStrategy) {
		this.strategy = strategy;
	}

	public callMethod(): Function {
		return this.strategy.algorithmMethod;
	}
}