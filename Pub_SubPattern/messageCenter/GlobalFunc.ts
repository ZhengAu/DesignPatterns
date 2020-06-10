import { BaseClass } from './BaseClass';

export class GlobalFunc extends BaseClass {
	public static ins: () => GlobalFunc;

	public getQualifiedClassName(value: any): string {
		var type = typeof value;
		if (!value || (type != 'object' && !value.prototype)) {
			return type;
		}

		let prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
		if (prototype.hasOwnProperty('__class__') && prototype['__class__']) {
			return prototype['__class__'];
		} else if (type == 'function' && value.name) {
			return value.name;
		} else if (prototype.constructor.name) {
			return prototype.constructor.name;
		}

		let constructorString = prototype.constructor.toString().trim();
		let index = constructorString.indexOf('(');
		let className = constructorString.subString(9, index);

		if (!className && type == 'function') {
			className = 'anonymous';
		}

		Object.defineProperty(prototype, '__class__', {
			value: className,
			enumerable: false,
			writable: true,
		});

		return className;
	}

	/**
	 * 传入函数表达式不适合
	 * 返回对象的完全限定类名
	 * @param value 需要完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number)和类对象
	 * @returns 包含完全限定类名称的字符串。
	 */
	public getQualifiedClassName2(value: any): string {
		var type = typeof value;
		if (!value || (type != 'object' && !value.prototype)) {
			return type;
		}
		var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
		if (prototype.hasOwnProperty('__class__')) {
			return prototype['__class__'];
		}
		var constructorString = prototype.constructor.toString().trim();
		var index = constructorString.indexOf('(');
		var className = constructorString.substring(9, index);
		Object.defineProperty(prototype, '__class__', {
			value: className,
			enumerable: false,
			writable: true,
		});
		return className;
	}

	public getQualifiedFunctionName(func: any): string {
		if (!func || !func.name) {
			return;
		}
		return func && func.name ? func.name : 'anonymous';
	}

	public getQualifiedFunctionName2(func: Function): string {
		if (!func || typeof func !== 'function') {
			console.error(`传入参数不对 --- ${func}`);
			return typeof func;
		}
		if (func.name) {
			return func.name;
		}

		let prototype = func.prototype ? func.prototype : Object.getPrototypeOf(func);
		if (prototype && prototype.constructor.name) {
			return prototype.constructor.name;
		}

		let constructorString = prototype.constructor.toString().trim();
		let index = constructorString.indexOf('(');
		let className = constructorString.substring(9, index);

		Object.defineProperty(prototype, '__class__', {
			value: className,
			enumerable: false,
			writable: true,
		});
		return className ? className : 'anonymous';
	}
}
