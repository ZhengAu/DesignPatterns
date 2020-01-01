import {Resume3} from "./Resume3";
import {Address} from "./Address";

class Client3 {
	public open(): void {
		let a: Resume3 = new Resume3();
		a.setInfo('zpj', 24, 1);
		let address: Address = new Address();
		address.setAddress('gd', 'mm', 525);
		a.setAddress(address);

		let b: Resume3 = a.Clone();
		address.setAddress('gd', 'gz', 222);
		b.setAddress(address);

		a.show();
		b.show();
	}
}