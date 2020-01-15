import * as GlobalFunc from "../02/GlobalFunc";

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
		let funs = this.events[key];
		for (let i = 0, fun; fun = funs[i++];) {
			if (fun == func) {
				return;
			}
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
		for (let i = 0, fun; fun = funs[i++];) {
			if (fun == func) {
				funs.splice(i, 1);
			}
		}
		if (!funs.length) {
			delete this.events[key];
		}
	}

	public removeEvents(key: string): void {
		let funs = this.events[key];
		if (!funs) {
			return;
		}
		for (let fun of funs) {
			this.removeEvent(key, fun);
		}
		delete this.events[key];
	}

	public removeAllEvent(): void {
		let keys = Object.keys(this.events);
		for (let key of keys) {
			this.removeEvents(key);
			delete this.events[key];
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

console.log(`===================================================`);

let postChange = function () {
	console.log(`postChange...`);

}
let postChangeKey = GlobalFunc.getQualifiedClassName(postChange);

MyEvent.ins().addEvent(postChangeKey, func1);
MyEvent.ins().addEvent(postChangeKey, func2);
MyEvent.ins().triggerEvent(postChangeKey, 8989898989);
