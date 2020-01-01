import {CarFactory} from "./CarFactory";

class TestCar {
    public constructor() {

    }

    public updateView(): void {
        let carFactory: CarFactory = new CarFactory();
        let myCar = carFactory.createCar('myCar');
        myCar.drive();
        carFactory.createCar('myCar2').drive();
    }

}

let test: TestCar = new TestCar();
test.updateView();

/**
 * 写出了TypeScript代码，但关键怎么运行起来达到自己想要的效果？
 * 编译成js文件？
 *
 * */