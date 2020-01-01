import {IPhone} from "./IPhone";
import {IRouter} from "./IRouter";

export abstract class IFactory {
	createPhone(): IPhone {
		return;
	}

	createRouter(): IRouter {
		return;
	}
}