import {Girl} from "./Girl";
import {Proxy} from "./Proxy";

class Test {
    public test(): void {
        let girl: Girl = new Girl('yyt',23);
        let proxy: Proxy = new Proxy(girl, 'zpj');
        proxy.giveChocolate();
        proxy.giveDolls();
        proxy.giveFlowers();
    }
}

let test: Test = new Test();
test.test();