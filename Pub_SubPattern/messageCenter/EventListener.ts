import { BaseClass } from "./BaseClass";
import { MessageType } from "./MessageType";

export class EventListener extends BaseClass {
	public static events: any = {};

	public constructor() {
		super();
	}

	public static ins: () => EventListener;

	public addEventListener(key: MessageType, func: Function, thisObj?: any): void {

	}

	public triggerEventListener(key: MessageType, ...params: any[]): void {

	}

	public removeEventListener(key: MessageType, func: Function): void {

	}

	public removeEventListeners(key: MessageType): void {

	}

	public removeAllEventListener(): void {

	}
}