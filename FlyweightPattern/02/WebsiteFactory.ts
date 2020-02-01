import { Website } from "./Website";
import { ConcreteWebsite } from "./ConcreteWebsite";

export class WebsiteFactory {
	public website: any = {};

	/**
	 * 获取网站
	 * @param key 网站类型名
	 */
	public getWebsiteByKey(key: string): Website {
		if (!this.website[key]) {
			this.website[key] = new ConcreteWebsite(key);
		}
		return this.website[key];
	}

	/**
	 * 网站类型数目
	 */
	public getWebsiteCount(): number {
		return Object.keys(this.website).length;
	}
}