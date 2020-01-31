import { FlyweightFactory, FlyweightType } from "./FlyweightFactory";
import { SharedConcreteFlyweight, UnsharedConcreteFlyweight } from "./ConcreteFlyweight";

let num: number = 100;
let factory = new FlyweightFactory();
let shared1: SharedConcreteFlyweight = factory.getSharedFlyweight(FlyweightType.X);
shared1.operation(num--);

let shared2: SharedConcreteFlyweight = factory.getSharedFlyweight(FlyweightType.Y);
shared2.operation(--num);

let shared3: SharedConcreteFlyweight = factory.getSharedFlyweight(FlyweightType.Y);
shared3.operation(--num);

let unshared: UnsharedConcreteFlyweight = factory.getUnsharedFlyweight();
unshared.operation(num - 10);
