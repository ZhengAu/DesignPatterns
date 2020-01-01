import {StrategyContext} from "./StrategyContext";
import {ConcreteStrategyA} from "./ConcreteStrategyA";
import {ConcreteStrategyB} from "./ConcreteStrategyB";
import A = require("./ConcreteStrategyA");

class Client {

	public constructor() {

	}

	public update(): void {
		new A.ConcreteStrategyA();
		let concreteStrategyA: ConcreteStrategyA = new ConcreteStrategyA();

		let strategyContext: StrategyContext = new StrategyContext(concreteStrategyA);
		strategyContext.callMethod()();

		strategyContext = new StrategyContext(new ConcreteStrategyB());
		strategyContext.callMethod()();
	}
}

let client: Client = new Client();
client.update();