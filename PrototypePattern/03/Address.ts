export class Address {
	public province: string;
	public city: string;
	public code: number;

	public constructor() {

	}

	public setAddress(pro: string, city: string, code: number): void {
		this.province = pro;
		this.city = city;
		this.code = code;
	}

	public Clone(): Address {
		return new Address();
	}
}