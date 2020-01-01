import {IObserver} from "./IObserver";

export class AbSubject {
	public arr: IObserver[] = [];

	public addObserver(observer: IObserver): void {
		this.arr.push(observer);
	}

	public removeObserver(observer: IObserver): void {
		for (let i = 0, len = this.arr.length; i < len; i++) {
			if (this.arr[i] == observer) {
				this.arr.splice(i, 1);
			}
		}
	}

	public Notify(): void {
		for (let item of this.arr) {
			item.updateInfo();
		}
	}
}