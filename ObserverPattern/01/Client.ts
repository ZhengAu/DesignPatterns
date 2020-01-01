import {NBASubject} from "./NBASubject";
import {ConcreteObserver} from "./ConcreteObserver";

let nba = new NBASubject();
new ConcreteObserver(1001, nba );
new ConcreteObserver(1002, nba );
nba.state = '开赛啦。。。';
nba.Notify();



