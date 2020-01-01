import {IFactory} from "./IFactory";
import {CarA} from "./CarA";
import {ICar} from "./ICar";

export class FactoryA extends IFactory{
	constructor() {
		super();
	}

	createICar(): ICar {
		return new CarA();
	}
}