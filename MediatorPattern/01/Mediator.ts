import { Colleague } from "./Colleague";

/**
 * 抽象中介者
 */
export abstract class Mediator {
	public abstract send(msg: string, colleague: Colleague): void;
}