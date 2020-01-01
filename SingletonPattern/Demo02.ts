/**
 * 懒汉式，需要的时候再去加载
 */
class Demo02 {
	private constructor() {
	}

	private static instance: Demo02;

	public static getInstance(): Demo02 {
		if (!this.instance) {
			this.instance = new Demo02();
		}
		return this.instance;
	}
}

function testDemo02() {
	let demo1: Demo02 = Demo02.getInstance();
	let demo2: Demo02 = Demo02.getInstance();
	console.log(demo1 === demo2);

	// constructor 需为 public
	// let d1: Demo02 = new Demo02();
	// let d2: Demo02 = new Demo02();
	// console.log(d1 === d2); // false
}

testDemo02();