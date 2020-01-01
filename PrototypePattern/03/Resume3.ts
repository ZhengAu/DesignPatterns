import {Address} from "./Address";

export class Resume3 {
	private username: string;
	private age: number;
	private gender: number;
	private address: Address;

	public cloneAddress(address: Address) {
		this.address = address.Clone();
	}

	public setInfo(username: string, age: number, gender: number): void {
		this.username = username;
		this.age = age;
		this.gender = gender;
	}

	public setAddress(address: Address): void {
		address.setAddress(address.province, address.city, address.code);
	}

	public Clone(): Resume3 {
		let obj: Resume3 = new Resume3();
		obj.cloneAddress(this.address);
		obj.setInfo('zzz', 222, 0);

		return obj;
	}

	public show(): void {
		console.log(`-----`);
	}
}