import { Manager } from "./Manager";
import { Request, RequestType } from "./Request";

/**
 * 经理
 * 请假三天内
 */
export class CommonManager extends Manager {
	public requestApplication(req: Request): void {
		if (req.type == RequestType.leave && req.total < 3) {
			console.log(`经理（CommonManager）批准请假，请假${req.total}天。`);
		} else if (this.superior) {
			this.superior.requestApplication(req);
		}
	}
}

/**
 * 总监
 * 请假在3天到一周的
 */
export class Majordomo extends Manager {
	public requestApplication(req: Request): void {
		if (req.type == RequestType.leave && req.total >= 3 && req.total < 7) {
			console.log(`总监（Majordomo）批准请假，请假${req.total}天。`);
		} else if (this.superior) {
			this.superior.requestApplication(req);
		}
	}
}

/**
 * 总经理
 * 请假超过一周，加薪
 */
export class GeneralManager extends Manager {
	public requestApplication(req: Request): void {
		if (req.type == RequestType.leave) {
			if (req.total < 30) {
				console.log(`总经理（GeneralManager）批准请假，请假${req.total}天。`);
			} else {
				console.log(`总经理（GeneralManager）不批准请假，请假${req.total}天，太长了，建议离职。。。`);
			}
		} else if (req.type == RequestType.salary) {
			if (req.total <= 5000) {
				console.log(`总经理（GeneralManager）允许加薪，加薪${req.total}元。`);
			} else {
				console.log(`总经理（GeneralManager）不允许加薪，加薪${req.total}元，超过能力范围。`);
			}
		}
	}
}