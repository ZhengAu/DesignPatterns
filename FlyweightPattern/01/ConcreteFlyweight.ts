import { IFlyweight } from "./IFlyweight";

export class SharedConcreteFlyweight implements IFlyweight {
	public operation(num: number): void {
		console.log(`共享的具体Flyweight --- SharedConcreteFlyweight --- ${num}`);
	}
}

export class UnsharedConcreteFlyweight implements IFlyweight {
	public operation(num: number): void {
		console.log(`不共享的具体Flyweight --- UnsharedConcreteFlyweight --- ${num}`);
	}
}