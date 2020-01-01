import {IPerson} from "./IPerson";
import {Pursuit} from "./Pursuit";
import {Girl} from "./Girl";

export class Proxy implements IPerson{

    public pursuit: Pursuit;

    public constructor(girl: Girl, username: string) {
        this.pursuit = new Pursuit(girl, username);
    }

    public giveChocolate(): void {
        this.pursuit.giveChocolate();
    }

    public giveDolls(): void {
        this.pursuit.giveDolls();
    }

    public giveFlowers(): void {
        this.pursuit.giveFlowers();
    }

}