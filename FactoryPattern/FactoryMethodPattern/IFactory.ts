/**
 * 抽象工作
 */
import {ICar} from "./ICar";

export abstract class IFactory {

	public createICar(): ICar {
		return;
	}

}