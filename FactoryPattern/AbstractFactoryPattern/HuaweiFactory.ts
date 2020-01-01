import {IFactory} from "./IFactory";
import {IPhone} from "./IPhone";
import {HuaweiPhone} from "./HuaweiPhone";
import {IRouter} from "./IRouter";
import {HuaweiRouter} from "./HuaweiRouter";

export class HuaweiFactory extends IFactory {
	createPhone(): IPhone {
		return new HuaweiPhone();
	}

	createRouter(): IRouter {
		return new HuaweiRouter();
	}
}