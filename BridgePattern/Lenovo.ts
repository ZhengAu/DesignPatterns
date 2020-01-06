import { IBrand } from "./IBrand";

export class Lenovo implements IBrand {

    public info(): void {
        console.log(`Lenovo...`);
    }
}