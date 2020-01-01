export class Resume2 {
	public username: string;
	public age: number;
	public gender: number;
	public work: string;

	public constructor() {
	}

	public setInfo(username: string, age: number, gender: number): void {
		this.username = username;
		this.age = age;
		this.gender = gender;
	}

	public setWork(workStr: string): void {
		this.work = workStr;
	}

	public showInfo(): void {
		console.log(`Name: ${this.username} -- Age: ${this.age} -- Gender: ${this.gender ? '男' : '女'}`);
		console.log(`Name: ${this.username} -- Work: ${this.work}`);
	}

	public Clone(): Resume2 {
		return new Resume2();
	}
}