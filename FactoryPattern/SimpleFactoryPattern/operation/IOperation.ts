export class IOperation {
    private _numberA: number;
    private _numberB: number;

    get numberA(): number {
        return this._numberA;
    }

    set numberA(value: number) {
        this._numberA = value;
    }

    get numberB(): number {
        return this._numberB;
    }

    set numberB(value: number) {
        this._numberB = value;
    }

    public getResult(): number {
        return 0;
    }
}