import { ConcreteShock1, ConcreteShock2, ConcreteShock3, ConcreteShock4 } from "./ConcreteShock";

let shock1 = new ConcreteShock1();
let shock2 = new ConcreteShock2();
let shock3 = new ConcreteShock3();
let shock4 = new ConcreteShock4();

shock1.buy();
shock2.buy();
shock3.buy();
shock4.buy();
console.log(`==========================`);
shock1.sell();
shock2.sell();
shock3.sell();
shock4.sell();

/**
 * 一个用户要买股票，得了解全部的股票，耦合度很高
 *
 * 如果能有一个机构或者代理人，对股票等比较熟悉的话，只要投资给这个机构或者代理人就可以了
 *
 * 这个机构或者代理人就是中间人，相当于一个接口，外观模式可用于此。
 */