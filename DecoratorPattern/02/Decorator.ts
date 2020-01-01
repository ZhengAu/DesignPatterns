import {Person} from "./Person";

export class Decorator extends Person {
	public person: Person;

	public constructor(person: Person) {
		super();
		this.person = person;
	}

	public showCloth(): void {
		if (this.person) {
			this.person.showCloth();
		}
	}
}