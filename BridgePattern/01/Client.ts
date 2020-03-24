import { Computer, Desktop, Laptop } from "./Computer";
import { Lenovo } from "./Lenovo";
import { Apple } from "./Apple";

let computer: Computer = new Desktop(new Lenovo());
computer.computerInfo();

computer = new Laptop(new Lenovo());
computer.computerInfo();

console.log(`===================================`);

let computer2: Computer = new Desktop(new Apple());
computer2.computerInfo();

computer2 = new Laptop(new Apple());
computer2.computerInfo();
