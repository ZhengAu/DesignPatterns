
export class MyEvent {
	public events: any = {};

	public static _ins: MyEvent;

	public static ins(): MyEvent {
		if (!MyEvent._ins) {
			MyEvent._ins = new MyEvent();
		}
		return MyEvent._ins;
	}

	public addEvent(key: string, func: Function): void {
		if (!this.events[key]) {
			this.events[key] = [];
		}
		this.events[key].push(func);
	}

	public triggerEvent1(key: string): void {

	}

	public triggerEvent2(...params: any[]): void {

	}

	public removeEvent(key: string, func: Function): void {
		let funs = this.events[key];
		if (!funs || !funs.length) {
			return;
		}
		let index: number = 0;
		for (let item of funs) {
			if (item && item === func) {
				funs.splice(index, 1);
			}
			index++;
		}
	}

	public removeEvents(): void {

	}
}