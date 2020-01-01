import {IPhone} from "./IPhone";

export class XiaomiPhone extends IPhone {
	phoneCall(): void {
		console.log(`小米手机phoneCall...`);
	}

	powerOff(): void {
		console.log(`小米手机powerOff...`);
	}

	powerOn(): void {
		console.log(`小米手机powerOn...`);
	}

	sendSMS(): void {
		console.log(`小米手机sendSMS...`);
	}

}
