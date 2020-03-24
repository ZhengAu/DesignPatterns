import { IBrand } from "./IBrand";

export class Lenovo implements IBrand {
	brandName: string;

	public set BrandName(v: string) {
		this.brandName = v;
	}

	public get BrandName(): string {
		return this.brandName;
	}

	public info(): void {
		console.log(`Lenovo...`);
		console.log(`联想${this.BrandName}`);
	}
}