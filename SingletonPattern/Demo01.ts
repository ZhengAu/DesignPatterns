/**
 * 饿汉式：线程安全，调用效率高，不能延时加载
 * 懒汉式：线程安全，调用效率不高，能延时加载
 * DCL懒汉式：不建议使用
 * 饿汉式改进（静态内部类）线程安全，调用效率高，可延时
 * 枚举单例：线程安全，调用效率高，不能延时
 */

/**
 * 饿汉式，类初始化的时候就已经创建实例了
 */
class Demo01 {
	// 私有构造器，外部无法使用new关键字直接创建此类的实例
	private constructor() {
	}

	// 类初始化的时候，立即加载该对象
	private static instance: Demo01 = new Demo01();

	// 获取实例的方法
	public static getInstance(): Demo01 {
		return this.instance;
	}
}

function testDemo01() {
	let demo01: Demo01 = Demo01.getInstance();
	let demo02: Demo01 = Demo01.getInstance();

	console.log(demo01 === demo02);
}

testDemo01();