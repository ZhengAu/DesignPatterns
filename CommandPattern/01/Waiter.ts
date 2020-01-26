import { Command } from "./Command";

export class Waiter {
	public command: Command;

	public setCommand(command: Command): void {
		this.command = command;
	}

	public notify(): void {
		this.command.excuteCommand();
	}
}