import {Decorator} from "./Decorator";

export class TShirts extends Decorator{
	public showCloth(): void {
		super.showCloth();
		console.log(`穿TShirt...`);
	}
}

export class NewCrow extends Decorator{
	public showCloth(): void {
		super.showCloth();
		console.log(`穿NewCrow...`);
	}
}

export class FootBallCloth extends Decorator{
	public showCloth(): void {
		super.showCloth();
		console.log(`穿FootBallClose...`);
	}
}

export class BasketballCloth extends Decorator{
	public showCloth(): void {
		super.showCloth();
		console.log(`穿BasketballCloth...`);
	}
}

export class Shoes extends Decorator{
	public showCloth(): void {
		super.showCloth();
		console.log(`穿Shoes...`);
	}
}
