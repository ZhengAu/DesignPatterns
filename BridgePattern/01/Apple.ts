import { IBrand } from "./IBrand";

export class Apple implements IBrand {
	brandName: string;

	public set BrandName(v: string) {
		this.brandName = v;
	}

	public get BrandName(): string {
		return this.brandName;
	}

	public info(): void {
		console.log(`Apple...`);
		console.log(`苹果${this.BrandName}`);
	}
}