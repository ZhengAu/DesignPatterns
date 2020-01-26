import { Command } from './Command'

export class Waiter {
	public commandList: Command[] = [];

	public addCommand(command: Command): void {
		this.commandList.push(command);
	}

	public deleteCommand(command: Command): void {
		for (let i: number = 0, len = this.commandList.length; i < len; i++) {
			if (this.commandList[i] == command) {
				this.commandList.splice(i, 1);
				i--;
				break;
			}
		}
	}

	public notify(): void {
		for (let item of this.commandList) {
			item.excuteCommand();
		}
	}
}