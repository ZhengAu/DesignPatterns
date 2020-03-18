import { IGift } from "./IGift";
import { Girl } from "../01/Girl"
import { Person } from "../01/Person";

export class Pursuit2 extends Person implements IGift {

	private girl: Girl;
	public constructor(name: string) {
		super(name);
	}

	public addPursuitObject(girl: Girl): void {
		this.girl = girl;
	}

	public sendFlowers(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I live you, I give you flowers...`);
	}

	public sendChocolates(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I live you, I give you chocolates...`);
	}

	public sendDolls(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I live you, I give you dolls...`);
	}

}