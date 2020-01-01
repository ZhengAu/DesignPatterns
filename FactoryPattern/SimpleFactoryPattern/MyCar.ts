import {ICar} from "./ICar";

export class MyCar extends ICar {
    public drive(): void {
        console.log(`drive MyCar`);
    }
}

export class MyCar2 extends ICar {
    public drive(): void {
        console.log(`drive MyCar2`);
    }
}

export class MyCar3 extends ICar {
    public drive(): void {
        console.log(`drive MyCar3`);
    }
}