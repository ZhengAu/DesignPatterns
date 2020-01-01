import {Subject} from './Subject';

export abstract class Observer {
	public id: number = 0;
	public subject: Subject;
	public state: string = '';

	public constructor(id: number, subject: Subject) {
		this.id = id;
		this.subject = subject;
		this.subject.addObserver(this);
	}

	public updateData(): void {
		this.state = this.subject.state;
		console.log(`观察者 ${this.id} -- 被通知 -- ${this.state}`);
	}
}