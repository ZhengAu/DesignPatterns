import {IObserver} from "./IObserver";
import {BallSubject, BellSubject} from "./BellSubject";

export class BellObserver implements IObserver {
	public id: number = 0;
	public state: string = '';
	public subject: BellSubject;

	constructor(id: number, subject: BellSubject) {
		this.id = id;
		this.subject = subject;
		this.subject.addObserver(this);
	}


	updateInfo(): void {
		this.state = this.subject.state;
		console.log(`observer ${this.id} -- update state -- ${this.state}`);
	}
}

export class BallObserver implements IObserver {
	public id: number = 0;
	public state: string = '';
	public subject: BallSubject;

	constructor(id: number, subject: BallSubject) {
		this.id = id;
		this.subject = subject;
		this.subject.addObserver(this);
	}

	updateInfo(): void {
		this.state = this.subject.state;
		console.log(`observer ${this.id} -- update state -- ${this.state}`);
	}

}