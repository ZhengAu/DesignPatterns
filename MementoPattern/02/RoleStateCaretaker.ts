import { RoleStateMemento } from "./RoleStateMemento";

/**
 * 角色状态管理者
 */
export class RoleStateCaretaker {
	private _roleMemento: RoleStateMemento;

	public get RoleMemento(): RoleStateMemento {
		return this._roleMemento;
	}

	public set RoleMemento(roleMemento: RoleStateMemento) {
		this._roleMemento = roleMemento;
	}

}