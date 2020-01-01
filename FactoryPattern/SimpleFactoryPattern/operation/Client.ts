import {OperationFactory} from "./OperationFactory";

class Client {

    public operate(): void {
        let factory: OperationFactory = new OperationFactory();

        let operation = factory.createOperation('+');
        operation.numberA = 100;
        operation.numberB = 20;
        console.log(operation.getResult());

        operation = factory.createOperation('-');
        operation.numberA = 100;
        operation.numberB = 10;
        console.log(operation.getResult());

        operation = factory.createOperation('sqrt');
        operation.numberA = 5;
        operation.numberB = 12;
        console.log(operation.getResult());
    }
}

let client = new Client();
client.operate();