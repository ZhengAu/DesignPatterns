import { Waiter } from "./Waiter";
import { Barbecuer } from "./Barbecuer";
import { MuttonCommand, ChildrenWingCommand } from "./Command";

let barbecuer = new Barbecuer();
let command1 = new MuttonCommand(barbecuer);
let command2 = new MuttonCommand(barbecuer);
let command3 = new MuttonCommand(barbecuer);
let command4 = new MuttonCommand(barbecuer);
let command5 = new ChildrenWingCommand(barbecuer);
let command6 = new ChildrenWingCommand(barbecuer);
let command7 = new ChildrenWingCommand(barbecuer);

let waiter = new Waiter();
waiter.addCommand(command1);
waiter.addCommand(command2);
waiter.addCommand(command3);
waiter.addCommand(command4);
waiter.addCommand(command5);
waiter.addCommand(command6);
waiter.addCommand(command7);
waiter.notify();
console.log(`============after delete command============`);
waiter.deleteCommand(command4);
waiter.deleteCommand(command7);
waiter.notify();
