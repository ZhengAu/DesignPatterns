import { Memento } from "./Memento";

export class Originator {

	// 需要保存的数据
	private _state: string;

	public set State(state: string) {
		this._state = state;
	}

	public get State(): string {
		return this._state;
	}

	/**
	 * 创建备忘录
	 */
	public createMemento(): Memento {
		let memento: Memento = new Memento(this.State);
		return memento;
	}

	/**
	 * 恢复备忘录的数据
	 */
	public setMemento(memento: Memento): void {
		this.State = memento.State;
	}

	/**
	 * 展示数据
	 */
	public showInfo(): void {
		console.log(`state --- ${this.State}`);
	}
}