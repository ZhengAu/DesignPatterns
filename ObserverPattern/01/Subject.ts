import {Observer} from "./Observer";

export abstract class Subject {
	public arr: Observer[] = [];
	public obj = {};
	public state: string = '';

	public addObserver(observer: Observer): void {
		// if (!this.obj[observer.id]) {
		// 	this.obj[observer.id] = observer;
		// }
		this.arr.push(observer);
	}

	public removeObserver(observer: Observer): void {
		// if (this.obj[observer.id]) {
		// 	delete this.obj[observer.id];
		// }
		for (let i = 0, len = this.arr.length; i < len; i++) {
			if (this.arr[i] == observer) {
				this.arr.splice(i, 1);
			}
		}
	}

	public Notify(): void {
		for (let item of this.arr) {
			item.updateData();
		}
	}
}