import { ConcreteMediator } from "./ConcreteMediator";
import { ConcreteColleague1, ConcreteColleague2 } from "./ConcreteColleague";

// 具体中介者
let mediator: ConcreteMediator = new ConcreteMediator();
// 具体同事
let concrete1: ConcreteColleague1 = new ConcreteColleague1(mediator);
let concrete2: ConcreteColleague2 = new ConcreteColleague2(mediator);

// 具体中介者关联的具体同事，哪些同事之间通信
mediator.setConcrete1(concrete1);
mediator.setConcrete2(concrete2);

concrete1.sendMsg('你点外卖了吗？');
console.log(`==================================`);
concrete2.sendMsg('我已经点了外卖了哦，你打算吃啥呀？');
