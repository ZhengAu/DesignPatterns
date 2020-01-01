import {IRouter} from "./IRouter";

export class HuaweiRouter extends IRouter {
	powerOn(): void {
		console.log(`华为路由powerOn...`);
	}

	powerOff(): void {
		console.log(`华为路由powerOff...`);
	}

	openWifi(): void {
		console.log(`华为路由openWifi...`);
	}

	setPassword(): void {
		console.log(`华为路由setPassword...`);
	}
}