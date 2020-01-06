import { IBrand } from "./IBrand";

export class Computer {
    public brand: IBrand;

    public constructor(brand: IBrand) {
        this.brand = brand;
    }

    public computerInfo(): void {
        this.brand.info();
    }
}

export class Desktop extends Computer {

    constructor(brand: IBrand) {
        super(brand);
    }
}

export class Laptop extends Computer {
    constructor(brand: IBrand) {
        super(brand);
    }
}