
export class Person {
	protected _name: string;

	public constructor(name: string) {
		this._name = name;
	}

	public get name(): string {
		return this._name;
	}
}