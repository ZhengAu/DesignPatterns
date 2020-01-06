import { Computer, Desktop } from "./Computer";
import { Lenovo } from "./Lenovo";

let computer: Computer = new Desktop(new Lenovo());
computer.computerInfo();