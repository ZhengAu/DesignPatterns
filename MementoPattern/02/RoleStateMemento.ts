/**
 * 角色备忘录
 */
export class RoleStateMemento {
	// 生命力，攻击力，防御力
	private _vitality: number = 0;
	private _attack: number = 0;
	private _defense: number = 0;

	public constructor(vit: number, att: number, def: number) {
		this._vitality = vit;
		this._attack = att;
		this._defense = def;
	}

	public get Vitality(): number {
		return this._vitality;
	}

	public get Attack(): number {
		return this._attack;
	}

	public get Defense(): number {
		return this._defense;
	}

}