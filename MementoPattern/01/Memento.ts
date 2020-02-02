/**
 * 备忘录 -- 保存数据
 */
export class Memento {
	private _state: string;

	public constructor(state: string) {
		this._state = state;
	}

	public get State(): string {
		return this._state;
	}
}