import {Builder} from "./Builder";
import {Product} from "./Product";

export class ConcreteBuilder implements Builder {
	private readonly product: Product;

	constructor() {
		this.product = new Product();
	}

	buildPartA(): void {
		this.product.partA = "商品a部分";
		console.log(`build part A...`);
	}

	buildPartB(): void {
		this.product.partB = "商品b部分";
		console.log(`build part B...`);
	}

	getResult(): Product {
		return this.product;
	}

}