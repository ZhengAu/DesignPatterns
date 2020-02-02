import { Originator } from "./Originator";
import { CareTaker } from "./CareTaker"

let originator: Originator = new Originator();
originator.State = 'Power on';
originator.showInfo();	// state --- Power on

let careTaker: CareTaker = new CareTaker();
// 保存数据到备忘录
careTaker.setMemento(originator.createMemento());
originator.State = 'Power off';
originator.showInfo();	// state --- Power off

// 从备忘录恢复数据
originator.setMemento(careTaker.getMemento());
originator.showInfo();	// state --- Power on