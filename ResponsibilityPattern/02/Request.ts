/**
 * 请求类型
 */
export class Request {
	public type: number = 0;
	public content: string = '';
	public total: number = 0;
}

export enum RequestType {
	leave = 1,	//请假
	salary = 2	//加薪
}