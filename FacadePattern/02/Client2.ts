import { Facade1, Facade2 } from "./Facade";

let facade1 = new Facade1();
facade1.facadeBuy();
facade1.facadeSell();

console.log(`====================`);

let facade2 = new Facade2();
facade2.facadeBuy();
facade2.facadeSell();
