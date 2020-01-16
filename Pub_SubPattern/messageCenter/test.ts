import { EventListener } from "./EventListener";
import { MessageType } from "./MessageType";

let eventListener = EventListener.ins();
let testFun1 = function () {
	console.log(`testFun1...`);
}
let testFun2 = function () {
	console.log(`testFun2...`);
	eventListener.removeEventListener(MessageType.TYPE_TEST_1, testFun1);
}
eventListener.addEventListener(MessageType.TYPE_TEST_1, testFun1);
eventListener.addEventListener(MessageType.TYPE_TEST_1, testFun1);
eventListener.addEventListener(MessageType.TYPE_TEST_1, testFun1);
eventListener.addEventListener(MessageType.TYPE_TEST_1, testFun2);

eventListener.triggerEventListener(MessageType.TYPE_TEST_1);
console.log(eventListener.events);
eventListener.triggerEventListener(MessageType.TYPE_TEST_1);
// console.log(eventListener.events);

