import {Builder} from "./Builder";
import {Product} from "./Product";

export class Director {
	director(builder: Builder): Product {
		builder.buildPartA();
		builder.buildPartB();
		return builder.getResult();
	}
}