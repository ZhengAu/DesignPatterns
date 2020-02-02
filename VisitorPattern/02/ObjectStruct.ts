import { IElement } from "./IElement";
import { IVisitor } from "./IVisitor";

export class ObjectStruct {
	public list: IElement[] = [];

	public add(element: IElement): void {
		for (let item of this.list) {
			if (item === element) {
				return;
			}
		}
		this.list.push(element);
	}

	public remove(element: IElement): void {
		let index: number = 0;
		for (let item of this.list) {
			if (item === element) {
				this.list.splice(index, 1);
			}
			index++;
		}
	}

	public showInfo(visitor: IVisitor): void {
		this.list.forEach(item => {
			item.accept(visitor);
		});
	}
}