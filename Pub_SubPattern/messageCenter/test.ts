import { EventListener } from "./EventListener";
import { MessageType } from "./MessageType";

let eventListener = EventListener.ins();

// =====================test1=====================
console.log('	=====================test1=====================');

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
console.log(eventListener.events);

// =====================test2=====================
console.log('	=====================test2=====================');

function testFun3() {
	console.log(`testFun3...`);
}

function testFun4() {
	console.log(`testFun4...`);
}

function myFunc() {
	console.log(`myFunc...`);
}

function myFunc2() {
	console.log(`myFunc2...`);
}

eventListener.observe(testFun3, myFunc);
eventListener.trigger(testFun3);
console.log(eventListener.events);

// =====================test3=====================
console.log('	=====================test3=====================');

eventListener.associate(myFunc, testFun3, testFun4, testFun1, testFun2);
eventListener.associate(myFunc2, testFun3, testFun4, testFun1, testFun2);
eventListener.trigger(testFun1);
eventListener.trigger(testFun2);
eventListener.trigger(testFun3);
eventListener.trigger(testFun4);
console.log(eventListener.events);
