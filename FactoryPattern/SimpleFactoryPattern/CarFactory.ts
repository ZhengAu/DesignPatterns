import {MyCar, MyCar2, MyCar3} from "./MyCar";
import {ICar} from "./ICar";

export class CarFactory {
    public createCar(type: string): ICar {
        let clazz: ICar;
        switch (type) {
            case 'myCar':
                clazz = new MyCar();
                break;
            case 'myCar2':
                clazz = new MyCar2();
                break;
            case 'myCar3':
                clazz = new MyCar3();
                break;
            default:
                clazz = new MyCar();
                break;
        }
        return clazz;
    }
}