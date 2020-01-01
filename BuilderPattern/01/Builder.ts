import {Product} from "./Product";

export interface Builder {
	buildPartA(): void;
	buildPartB(): void;

	getResult(): Product;
}