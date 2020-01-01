import {Director} from "./Director";
import {ConcreteBuilder} from "./ConcreteBuilder";
import {Product} from "./Product";

let director: Director = new Director();
let worker1: ConcreteBuilder = new ConcreteBuilder();
let worker2: ConcreteBuilder = new ConcreteBuilder();

let product1: Product = director.director(worker1);
product1.show();

let product2: Product = director.director(worker2);
product2.show();
