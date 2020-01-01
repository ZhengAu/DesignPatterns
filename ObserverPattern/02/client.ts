import {BallSubject, BellSubject} from "./BellSubject";
import {BallObserver, BellObserver} from "./BellObserver";

let bell = new BellSubject();
new BellObserver(1001, bell);
new BellObserver(1002, bell);
new BellObserver(1003, bell);
bell.state = `下课铃响了。。。回家咯`;
bell.Notify();

let ball = new BallSubject();
new BallObserver(90901, ball);
new BallObserver(90902, ball);
new BallObserver(90903, ball);
ball.state = `球队开球了。。。看球去`;
ball.Notify();