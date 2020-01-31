import { SharedConcreteFlyweight, UnsharedConcreteFlyweight } from "./ConcreteFlyweight";

/**
 * 享元工厂
 */
export class FlyweightFactory {
	public flyObj = {};

	public constructor() {
		this.flyObj[FlyweightType.X] = new SharedConcreteFlyweight();
		this.flyObj[FlyweightType.Y] = new SharedConcreteFlyweight();
		this.flyObj[FlyweightType.Z] = new SharedConcreteFlyweight();
	}

	public getSharedFlyweight(type: number): SharedConcreteFlyweight {
		return this.flyObj[type];
	}

	public getUnsharedFlyweight(): UnsharedConcreteFlyweight {
		return new UnsharedConcreteFlyweight();
	}

}

export enum FlyweightType {
	X = 1,
	Y = 2,
	Z = 3
}