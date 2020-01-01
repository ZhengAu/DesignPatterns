export class Person {
	private username: string;

	public setName(username: string) {
		this.username = username;
	}

	public getName(): string {
		return this.username;
	}

	public showCloth(): void {
		// console.log(`${this.username}的装扮 --- `);
	}

}