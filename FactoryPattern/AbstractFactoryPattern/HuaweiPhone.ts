import {IPhone} from "./IPhone";

export class HuaweiPhone extends IPhone {
	phoneCall(): void {
		console.log(`华为手机phoneCall...`);
	}

	powerOff(): void {
		console.log(`华为手机powerOff...`);
	}

	powerOn(): void {
		console.log(`华为手机powerOn...`);
	}

	sendSMS(): void {
		console.log(`华为手机sendSMS...`);
	}

}