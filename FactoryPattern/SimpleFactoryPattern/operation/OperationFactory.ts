import {IOperation} from "./IOperation";
import {OperationAdd, OperationDiv, OperationMul, OperationSqr, OperationSub} from "./Operation";

export class OperationFactory {
    public createOperation(operation: string): IOperation {
        switch (operation) {
            case "+":
                return new OperationAdd();
            case "-":
                return new OperationSub();
            case "*":
                return new OperationMul();
            case "/":
                return new OperationDiv();
            case "sqrt":
                return new OperationSqr();
        }
    }
}
