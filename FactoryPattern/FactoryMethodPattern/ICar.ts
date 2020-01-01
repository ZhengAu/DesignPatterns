/**
 * 抽象汽车类
 */
export abstract class ICar {
	private _carName: string;

	get carName(): string {
		return this._carName;
	}

	set carName(value: string) {
		this._carName = value;
	}

	public showInfo(): void {
		console.log(`carName --- ${this.carName}`);
	}
}