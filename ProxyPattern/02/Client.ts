import { Pursuit2 } from "./Pursuit2";
import { Girl } from "../01/Girl";
import { ProxyPerson } from "./ProxyPerson";

// 追求对象
let girl = new Girl('tingting');
// 追求者
let pursuit = new Pursuit2('jinjin');
pursuit.addPursuitObject(girl);

// 代理者
let proxy = new ProxyPerson(pursuit);
console.log(`${girl.name}, someone asked me to do something for you...`);
proxy.sendDolls();
proxy.sendChocolates();
proxy.sendFlowers();

/**
 * 脸皮薄类型：让人代理送东西，这很危险，分分钟给代理人泡走了。。。
 */