import {IFactory} from "./IFactory";
import {FactoryA} from "./FactoryA";
import {ICar} from "./ICar";
import {FactoryB} from "./FactoryB";

class Client {

	private factory: IFactory;
	private car: ICar;

	public main(): void {
		this.factory = new FactoryA();
		this.car = this.factory.createICar();
		this.car.showInfo();

		this.factory = new FactoryB();
		this.car = this.factory.createICar();
		this.car.showInfo();
	}
}
let client = new Client();
client.main();