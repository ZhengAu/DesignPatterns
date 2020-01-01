/**
 * 揭示模块模式：把返回对象的属性映射到我们想要公开的私有函数
 */

const myRevealingModule = (function () {
	let privateVar = 'ZPJ';
	const publicVar = 'I LOVE YOU';

	function privateFunc() {
		console.log(`Name: ${privateVar}`);
	}

	function publicSetName(name) {
		privateVar = name;
	}

	function publicGetName() {
		privateFunc();
	}

	/**
	 * 把想要公开的私有函数或变量映射到返回对象上
	 * 修改return对象的一行代码，就可以把成员从public变成private，反之亦然
	 */
	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
})();
myRevealingModule.getName();
myRevealingModule.setName('YYT');
myRevealingModule.getName();
console.log(myRevealingModule.greeting);
