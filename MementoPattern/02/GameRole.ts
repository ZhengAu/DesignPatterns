import { RoleStateMemento } from "./RoleStateMemento";

/**
 * 游戏角色
 */
export class GameRole {
	// 生命力，攻击力，防御力
	private _vitality: number = 0;
	private _attack: number = 0;
	private _defense: number = 0;

	public saveRoleState(): RoleStateMemento {
		return new RoleStateMemento(this._vitality, this._attack, this._defense);
	}

	public recoveryRoleState(memento: RoleStateMemento): void {
		this._vitality = memento.Vitality;
		this._attack = memento.Attack;
		this._defense = memento.Defense;
	}

	public showInfo(): void {
		console.log(`角色生命力 --- ${this._vitality}`);
		console.log(`角色攻击力 --- ${this._attack}`);
		console.log(`角色防御力 --- ${this._defense}`);
	}

	/**
	 * 初始战斗属性
	 */
	public initState(): void {
		this._vitality = 100;
		this._attack = 100;
		this._defense = 100;
	}

	/**
	 * 战斗，各属性降低为0
	 */
	public fight(vit: number = 0, att: number = 0, def: number = 0): void {
		this._vitality = vit;
		this._attack = att;
		this._defense = def;
	}

}