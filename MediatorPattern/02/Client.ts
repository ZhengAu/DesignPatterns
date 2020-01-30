import { UNSecurityCouncil } from "./UnSecurityCouncil";
import { USA, China } from "./ConcreteCountry";

let unsc: UNSecurityCouncil = new UNSecurityCouncil();
let usa: USA = new USA(unsc);
let china: China = new China(unsc);

unsc.USA = usa;
unsc.China = china;

usa.deal(`我要强征高关税，除非你答应我一切的要求。。。`);
console.log(`===========================================`);
china.deal(`痴心妄想，谈判可以，但绝不接受有损国家利益的事情，我们不怕事。。。`);
