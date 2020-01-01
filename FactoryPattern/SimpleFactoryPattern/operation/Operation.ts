import {IOperation} from "./IOperation";

class OperationAdd extends IOperation {
    public getResult(): number {
        return this.numberA + this.numberB;
    }
}

class OperationSub extends IOperation {
    public getResult(): number {
        return this.numberA - this.numberB;
    }
}

class OperationMul extends IOperation {
    public getResult(): number {
        return this.numberA * this.numberB;
    }
}

class OperationDiv extends IOperation {
    public getResult(): number {
        if (this.numberB == 0) {
            console.log(`除数不能为0.`);
            return;
        }
        return this.numberA / this.numberB;
    }
}

class OperationSqr extends IOperation {
    public getResult(): number {
        return Math.sqrt(this.numberA * this.numberA + this.numberB * this.numberB);
    }
}

export {
    OperationAdd,
    OperationSub,
    OperationMul,
    OperationDiv,
    OperationSqr
}