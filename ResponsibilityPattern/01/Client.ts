import { ConcreteHandler1, ConcreteHandler2, ConcreteHandler3, ConcreteHandler4 } from "./ConcreteHandler";

let handler1 = new ConcreteHandler1();
let handler2 = new ConcreteHandler2();
let handler3 = new ConcreteHandler3();
let handler4 = new ConcreteHandler4();

handler1.setSuccessor(handler2);
handler2.setSuccessor(handler3);
handler3.setSuccessor(handler4);

let scores: number[] = [0, 50, 65, 88, 98, 1011];

scores.forEach(item => {
	handler1.handleRequest(item);
});
