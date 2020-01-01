import {IFactory} from "./IFactory";
import {ICar} from "./ICar";
import {CarB} from "./CarB";

export class FactoryB extends IFactory {
	constructor() {
		super();
	}

	createICar(): ICar {
		return new CarB();
	}
}