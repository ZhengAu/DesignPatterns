import { Memento } from "./Memento";

/**
 * 管理者 -- 设置或获取备忘录
 */
export class CareTaker {
	// 备忘录保存数据
	private memento: Memento;

	public setMemento(memento: Memento): void {
		this.memento = memento;
	}

	public getMemento(): Memento {
		return this.memento;
	}
}