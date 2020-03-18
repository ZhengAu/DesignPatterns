import { Girl } from "./Girl";
import { Pursuit } from "./Pursuit";

let girl = new Girl('qianer');
let pursuit = new Pursuit('xiaozheng');

pursuit.addPursuitObject(girl);
pursuit.sendCholocate();
pursuit.sendDolls();
pursuit.sendFlower();

/**
 * 厚脸皮类型：直接追求大法，直接送东西表白。主动才有戏，这样才能追到女孩子。
 */