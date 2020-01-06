import { IBrand } from "./IBrand";

export class Apple implements IBrand {

    public info(): void {
        console.log(`Apple...`);
    }
}