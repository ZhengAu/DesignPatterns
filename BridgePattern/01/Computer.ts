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
		this.brand.brandName = `台式机`;
	}
}

export class Laptop extends Computer {
	constructor(brand: IBrand) {
		super(brand);
		this.brand.brandName = `笔记本`;
	}
}