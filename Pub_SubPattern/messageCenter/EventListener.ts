import { BaseClass } from "./BaseClass";

export class EventListener extends BaseClass {
	public events: any = {};

	public constructor() {
		super();
	}

	public static ins: () => EventListener;

	public addEventListener(key: string, func: Function, thisObj?: any): void {
		if (!this.events[key]) {
			this.events[key] = [];
		}
		let funs = this.events[key];
		for (let i = 0; i < funs.length; i++) {
			if (funs[i] == func) {
				return;
			}
		}
		this.events[key].push(func);
	}

	public triggerEventListener(key: string, ...params: any[]): void {
		let funs = this.events[key];
		if (!funs || !funs.length) {
			return;
		}
		for (let i = 0; i < funs.length; i++) {
			let item = funs[i];
			if (!item) {
				funs.splice(i, 1);
				i--;
				continue;
			}
			item.apply(this, params);
		}
	}

	public removeEventListener(key: string, func: Function): void {
		let funs = this.events[key];
		if (!funs || !funs.length) {
			return;
		}
		for (let i = 0; i < funs.length; i++) {
			let item = funs[i];
			if (item == func) {
				funs[i] = null;
				break;
			}
		}
	}

	public removeEventListeners(key: string): void {
		let funs = this.events[key];
		if (!funs) {
			return;
		}
		for (let fun of funs) {
			this.removeEventListener(key, fun);
		}
		delete this.events[key];
	}

	public removeAllEventListener(): void {
		let keys = Object.keys(this.events);
		for (let key of keys) {
			this.removeEventListeners(key);
			delete this.events[key];
		}
		this.events = {};
	}
}