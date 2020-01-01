import {Resume2 as Resume} from "./Resume2";

class Client2 {

	public open(): void {
		let a: Resume = new Resume();
		a.setInfo('zpj', 24, 1);
		a.setWork(`2019.04-2019.07 公司1`);

		let b:Resume = a.Clone();
		b.setWork(`2019.08-now 公司2`);

		a.showInfo();
		b.showInfo();
	}
}