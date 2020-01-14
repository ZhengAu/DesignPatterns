
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

	public triggerEvent(key: string, ...param: any[]): void {
		let funs = this.events[key];
		if (!funs || !funs.length) {
			return;
		}
		let params = param;
		funs.forEach(item => {
			item.apply(this, params);
		});
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
		let keys = Object.keys(this.events);
		for (let i = 0; i < keys.length; i++) {
			this.events[keys[i]] = [];
		}
		this.events = {};
	}
}

let func1 = function (price: number) {
	console.log(`price = `, price);
}
let func2 = function (price: number, num: number = 100) {
	console.log(`price = ${price}, num = ${num}.`);
}

MyEvent.ins().addEvent('myEvent', func1);
MyEvent.ins().addEvent('myEvent2', func2);
MyEvent.ins().triggerEvent('myEvent', 1200);
MyEvent.ins().triggerEvent('myEvent2', 1200, 100000);
