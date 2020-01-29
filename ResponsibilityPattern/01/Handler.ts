/**
 * 责任链基类
 */
export class Handler {
	public successor: Handler;

	/**
	 * 设置下一责任者
	 * @param handler 
	 */
	public setSuccessor(handler: Handler): void {
		this.successor = handler;
	}

	public handleRequest(score: number): void {

	}
}