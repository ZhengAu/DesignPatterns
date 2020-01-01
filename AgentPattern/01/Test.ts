import {Girl} from "./Girl";
import {Pursuit} from "./Pursuit";

class Test {
    public pursuit(): void {

        let myGirl: Girl = new Girl('yyt',23);

        let me: Pursuit = new Pursuit(myGirl);
        me.giveChololate();
        me.giveDolls();
        me.giveFlowers();
    }
}

let test = new Test();
test.pursuit();