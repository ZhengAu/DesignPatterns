import { Handler } from "./Handler";

/**
 * 具体处理者
 */
export class ConcreteHandler1 extends Handler {

	public handleRequest(score: number): void {
		if (score > 0 && score < 60) {
			console.log('your score is under 60.');
		} else if (this.successor) {
			this.successor.handleRequest(score);
		} else {
			console.log('concrete handler 1 can not handle this score.');
		}
	}
}

export class ConcreteHandler2 extends Handler {
	public handleRequest(score: number): void {
		if (score >= 60 && score < 80) {
			console.log('your score is between 60 to 80.');
		} else if (this.successor) {
			this.successor.handleRequest(score);
		} else {
			console.log('concrete handler 2 can not handle this score.');
		}
	}
}

export class ConcreteHandler3 extends Handler {
	public handleRequest(score: number): void {
		if (score >= 80 && score < 90) {
			console.log('your score is between 80 to 90.');
		} else if (this.successor) {
			this.successor.handleRequest(score);
		} else {
			console.log('concrete handler 3 can not handle this score.');
		}
	}
}

export class ConcreteHandler4 extends Handler {
	public handleRequest(score: number): void {
		if (score <= 100 && score >= 90) {
			console.log('your score is above 90.');
		} else if (this.successor) {
			this.successor.handleRequest(score);
		} else if (score > 100) {
			console.log('concrete handler 4: your score is error.');
		} else {
			console.log('concrete handler 4 can not handle this score.');
		}
	}
}