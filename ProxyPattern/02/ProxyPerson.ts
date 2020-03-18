import { IGift } from "./IGift";
import { Pursuit2 } from "./Pursuit2";

export class ProxyPerson implements IGift {

	private pursuit: Pursuit2;
	public constructor(pursuit: Pursuit2) {
		this.pursuit = pursuit;
	}

	public sendFlowers(): void {
		this.pursuit.sendFlowers();
	}

	public sendChocolates(): void {
		this.pursuit.sendChocolates();
	}

	public sendDolls(): void {
		this.pursuit.sendDolls();
	}

}