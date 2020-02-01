import { Website } from "./Website";
import { User } from "./User";

export class ConcreteWebsite extends Website {

	public getWebsiteInfo(user: User): void {
		console.log(`网站类别名：${this.WebsiteName} --- 用户：${user.Username}`);
	}
}