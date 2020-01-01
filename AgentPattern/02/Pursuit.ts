import {IPerson} from "./IPerson";
import {Girl} from "./Girl";

export class Pursuit implements IPerson {
    public username: string;
    public girl: Girl;

    public constructor(girl: Girl, username: string) {
        this.girl = girl;
        this.username = username;
    }

    public giveChocolate(): void {
        console.log(`${this.username}送巧克力给${this.girl.username}`);
    }

    public giveDolls(): void {
        console.log(`${this.username}送洋娃娃给${this.girl.username}`);
    }

    public giveFlowers(): void {
        console.log(`${this.username}送玫瑰花给${this.girl.username}`);
    }

}