import { ObjectStruct } from "./ObjectStruct";
import { ConcreteElementA, ConcreteElementB } from "./ConcreteElement";
import { ConcreteVisitor1 } from "./ConcreteVisitor";

let objStruct: ObjectStruct = new ObjectStruct();
let eleA: ConcreteElementA = new ConcreteElementA();
let eleB: ConcreteElementB = new ConcreteElementB();
objStruct.add(eleA);
objStruct.add(eleB);

let visitorA: ConcreteVisitor1 = new ConcreteVisitor1();
objStruct.showInfo(visitorA);
