import { Barbecuer } from './Barbecuer';

/**
 * 命令基类
 */
export class Command {
	public barbecuer: Barbecuer;

	public constructor(bar: Barbecuer) {
		this.barbecuer = bar;
	}

	public excuteCommand(): void {

	}
}

/**
 * 烤羊肉命令
 */
export class MuttonCommand extends Command {

	public excuteCommand(): void {
		this.barbecuer.makeMutton();
	}
}

/**
 * 烤鸡翅膀命令
 */
export class ChildrenWingCommand extends Command {

	public excuteCommand(): void {
		this.barbecuer.makeChickenWing();
	}
}