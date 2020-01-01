import {Resume} from "./Resume";

class Client {

	public open(params: any[]): void {
		let resumeA: Resume = new Resume('zpj', 24, 1);
		resumeA.setWork(`在广州某公司工作，月薪7k，工作经验半年。`);

		let resumeB: Resume = new Resume('yyt', 23, 0);
		resumeB.setWork(`在广州某中学教书，月薪6k，实习期间。`);

		resumeA.showInfo();
		resumeB.showInfo();

		let resumeC: Resume = resumeA;
		resumeC.setWork(`xxx年工作经验`);
		resumeC.showInfo();
	}
}