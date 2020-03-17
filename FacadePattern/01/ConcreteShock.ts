import { Shock } from "./Shock";

class ConcreteShock1 extends Shock {

	public buy(): void {
		console.log(`ConcreteShock1.buy()...`);
	}

	public sell(): void {
		console.log(`ConcreteShock1.sell()...`);
	}
}

class ConcreteShock2 extends Shock {

	public buy(): void {
		console.log(`ConcreteShock2.buy()...`);
	}

	public sell(): void {
		console.log(`ConcreteShock2.sell()...`);
	}
}

class ConcreteShock3 extends Shock {

	public buy(): void {
		console.log(`ConcreteShock3.buy()...`);
	}

	public sell(): void {
		console.log(`ConcreteShock3.sell()...`);
	}
}

class ConcreteShock4 extends Shock {

	public buy(): void {
		console.log(`ConcreteShock4.buy()...`);
	}

	public sell(): void {
		console.log(`ConcreteShock4.sell()...`);
	}
}

export {
	ConcreteShock1,
	ConcreteShock2,
	ConcreteShock3,
	ConcreteShock4
}