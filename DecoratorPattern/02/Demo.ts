import {Person} from "./Person";
import {BasketballCloth, FootBallCloth, NewCrow, Shoes, TShirts} from "./ConcreteDecorator";

let person1: Person = new Person();
person1.setName('大鸟');

console.log(`第一种装扮 => ${person1.getName()}`);
let decorator1 = new TShirts(person1);
let decorator2 = new NewCrow(decorator1);
let decorator3 = new FootBallCloth(decorator2);
let decorator4 = new BasketballCloth(decorator3);
decorator4.showCloth();

console.log(`第二种装扮 => ${person1.getName()}`);
let decorator21 = new TShirts(person1);
let decorator22 = new FootBallCloth(decorator21);
let decorator23 = new BasketballCloth(decorator22);
let decorator24 = new NewCrow(decorator23);
let decorator25 = new Shoes(decorator24);
decorator25.showCloth();

