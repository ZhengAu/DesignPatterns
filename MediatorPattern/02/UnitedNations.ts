import { Country } from "./Country";

/**
 * 联合国机构抽象类
 */
export abstract class UnitedNations {
	public abstract dealProblem(msg: string, country: Country): void;
}