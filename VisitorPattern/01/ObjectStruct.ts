import { Person } from "./Person";
import { Action } from "./Action";

/**
 * 对象结构，就只有男或女两种性别，所以需要其对比
 */
export class ObjectStruct {
	public list: Person[] = [];

	public add(person: Person): void {
		for (let item of this.list) {
			if (item === person) {
				return;
			}
		}
		this.list.push(person);
	}

	public remove(person: Person): void {
		for (let i: number = 0, len = this.list.length; i < len; i++) {
			if (this.list[i] === person) {
				this.list.splice(i, 1);
			}
		}
	}

	public showInfo(action: Action): void {
		this.list.forEach(item => {
			item.acceptAction(action);
		});
	}
}