/**
 * IIFE --- 即时调用函数表达式
 * 模块模式：创建新的公共函数来调用私有函数或变量
 */
const myModule = (function () {
	const privateVariable = 'Hello World';

	function privateMethod() {
		console.log(privateVariable);
	}

	// 返回对外接口
	return {
		// 公共函数 -- 调用私有函数和变量
		publicMethod: function () {
			privateMethod();
		}
	}
})();

myModule.publicMethod();