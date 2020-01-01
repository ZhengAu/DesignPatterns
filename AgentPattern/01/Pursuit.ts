import {Girl} from "./Girl";

export class Pursuit {
    private girl: Girl;

    public constructor(girl: Girl) {
        this.girl = girl;
    }

    public giveDolls(): void {
        console.log(`给喜欢的女生${this.girl.username}送洋娃娃。。。`);
    }

    public giveFlowers(): void {
        console.log(`给喜欢的女生${this.girl.username}送玫瑰花。。。`);
    }

    public giveChololate(): void {
        console.log(`给喜欢的女生${this.girl.username}送德芙巧克力。。。`);
    }

}