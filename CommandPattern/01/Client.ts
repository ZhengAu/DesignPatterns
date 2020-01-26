import { Waiter } from "./Waiter";
import { Barbecuer } from "./Barbecuer";
import { MuttonCommand, ChildrenWingCommand } from "./Command";

let barbecuer = new Barbecuer();
let command1: MuttonCommand = new MuttonCommand(barbecuer);
let command2: ChildrenWingCommand = new ChildrenWingCommand(barbecuer);
let waiter = new Waiter();

waiter.setCommand(command1);
waiter.notify();//点单一次通知一次，不符合常理。应该是统一点完单再去通知
waiter.setCommand(command2);
waiter.notify();