import {IFactory} from "./IFactory";
import {HuaweiFactory} from "./HuaweiFactory";
import {IPhone} from "./IPhone";
import {XiaomiFactory} from "./XiaomiFactory";

let factory: IFactory = new HuaweiFactory();
let phone: IPhone = factory.createPhone();
console.log(`==========HuaWei==========`);
phone.powerOn();
phone.phoneCall();
phone.sendSMS();
phone.powerOff();

console.log(`==========XiaoMi==========`);
factory = new XiaomiFactory();
phone = factory.createPhone();
phone.powerOn();
phone.phoneCall();
phone.sendSMS();
phone.powerOff();
