export class Product {

	public partA: string = "part A";
	public partB: string = "part B";

	public show(): void {
		console.log(`product ==== ${this.partA} -- ${this.partB}`);
	}
}