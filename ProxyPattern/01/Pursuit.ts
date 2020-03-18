import { Person } from "./Person";
import { Girl } from "./Girl";

export class Pursuit extends Person {

	public girl: Girl;

	constructor(name: string) {
		super(name);
	}

	public addPursuitObject(girl: Girl): void {
		this.girl = girl;
	}

	public sendFlower(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I give you flower...`);
	}

	public sendDolls(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I give you dolls...`);
	}

	public sendCholocate(): void {
		console.log(`${this.girl.name}, My name is ${this.name}, I give you cholocate...`);
	}
}