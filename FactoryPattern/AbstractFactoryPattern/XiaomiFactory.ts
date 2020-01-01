import {IFactory} from "./IFactory";
import {XiaomiPhone} from "./XiaomiPhone";
import {IPhone} from "./IPhone";
import {XiaomiRouter} from "./XiaomiRouter";
import {IRouter} from "./IRouter";

export class XiaomiFactory extends IFactory{
	createPhone(): IPhone {
		return new XiaomiPhone();
	}

	createRouter(): IRouter {
		return new XiaomiRouter();
	}
}