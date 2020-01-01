class Demo03 {
	private constructor() {
	}

	public static ins(): any {
		let Class: any = this;
		// 第一次：[Function: Demo03]
		// 第二次：[Function: Demo03] {_instance: Demo03 {} }
		if (!Class._instance) {
			Class._instance = new Class();
		}
		return Class._instance;
	}
}

function testDemo03() {
	let d: Demo03 = Demo03.ins();
	let d2: Demo03 = Demo03.ins();
	console.log(d === d2);
}

testDemo03();