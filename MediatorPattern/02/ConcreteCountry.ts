import { Country } from "./Country";

export class USA extends Country {
	public deal(msg: string): void {
		console.log(`USA started to deal this problem...`);
		this.mediator.dealProblem(msg, this);
	}

	public showMessage(msg: string, whom: Country): void {
		console.log(`USA got the message --- ${msg}`);
	}
}

export class China extends Country {
	public deal(msg: string): void {
		console.log(`China started to deal this problem...`);
		this.mediator.dealProblem(msg, this);
	}

	public showMessage(msg: string, whom: Country): void {
		console.log(`China got the message --- ${msg}`);
	}
}