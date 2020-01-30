import { UnitedNations } from "./UnitedNations";
import { Country } from "./Country";
import { USA, China } from "./ConcreteCountry";

/**
 * 联合国安全理事会
 */
export class UNSecurityCouncil extends UnitedNations {
	public _usa: USA;
	public _china: China;

	public set USA(usa: USA) {
		this._usa = usa;
	}

	public get USA(): USA {
		return this._usa;
	}

	public set China(china: China) {
		this._china = china;
	}

	public get China(): China {
		return this._china;
	}

	public dealProblem(msg: string, country: Country): void {
		if (country == this.China) {
			this.USA.showMessage(msg, this.China);
		} else if (country == this.USA) {
			this.China.showMessage(msg, this.USA);
		} else {
			console.log(`can not deal this problem...`);
		}
	}

}