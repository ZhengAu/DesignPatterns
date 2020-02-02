import { Man, Woman } from "./Person";
import { Success, Failure } from "./Action";
import { ObjectStruct } from "./ObjectStruct";

let struct: ObjectStruct = new ObjectStruct();
let man: Man = new Man();
let woman: Woman = new Woman();
struct.add(man);
struct.add(woman);

let success: Success = new Success();
let failure: Failure = new Failure();

struct.showInfo(success);
struct.showInfo(failure);