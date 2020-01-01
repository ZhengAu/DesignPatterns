import {ShapeDecorator} from "./ShapeDecorator";
import {Shape} from "./Shape";

export class RedShapeDecorator extends ShapeDecorator {

	public constructor(decoratedShape: Shape) {
		super(decoratedShape);
	}

	public draw(): void {
		super.draw();
		this.setRedBorder(this.decoratedShape);
	}

	private setRedBorder(decoratedShape: Shape) {
		console.log(`Border Color: Red...`);
	}

}