import {IRouter} from "./IRouter";

export class XiaomiRouter extends IRouter {
	powerOn(): void {
		console.log(`小米路由powerOn...`);
	}

	powerOff(): void {
		console.log(`小米路由powerOff...`);
	}

	openWifi(): void {
		console.log(`小米路由openWifi...`);
	}

	setPassword(): void {
		console.log(`小米路由setPassword...`);
	}
}