import { CommonManager, Majordomo, GeneralManager } from "./Handler";
import { Request, RequestType } from "./Request";

let commonManager: CommonManager = new CommonManager('经理先生');
let majordomo: Majordomo = new Majordomo('总监女士');
let generalManager: GeneralManager = new GeneralManager('总经理女士');

commonManager.setSuperior(majordomo);
majordomo.setSuperior(generalManager);

let req = new Request();
req.type = RequestType.leave;
req.total = 2;
req.content = '亲戚结婚';
commonManager.requestApplication(req);

console.log(`===================================`);

let req1 = new Request();
req1.type = RequestType.salary;
req1.total = 4800;
req1.content = '表现优秀，建议加薪';
commonManager.requestApplication(req1);