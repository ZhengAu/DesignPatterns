import {Target} from "./Target";
import {Adaptee} from "./Adaptee";

export class Adapter extends Target {
	public adaptee: Adaptee;

	constructor() {
		super();
		this.adaptee = new Adaptee();
	}

	public myRequest(): void {
		console.log(`request special by adapter...`);
		this.adaptee.specialRequest();
	}
}