import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {RedShapeDecorator} from "./RedShapeDecorator";

class DecoratorPatternDemo {
	public main(): void {
		let circle: Shape = new Circle();
		let redCircle: Shape = new RedShapeDecorator(new Circle());
		let redRectangle: Shape = new RedShapeDecorator(new Rectangle());

		console.log(`===============`);
		circle.draw();
		console.log(`===============`);
		redCircle.draw();
		console.log(`===============`);
		redRectangle.draw();
	}
}

let demo = new DecoratorPatternDemo();
demo.main();