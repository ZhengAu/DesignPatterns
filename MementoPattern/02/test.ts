import { GameRole } from "./GameRole";
import { RoleStateCaretaker } from "./RoleStateCaretaker";

console.log(`================= start game =================`);
let role: GameRole = new GameRole();
role.initState();
role.showInfo();

let caretaker: RoleStateCaretaker = new RoleStateCaretaker();
caretaker.RoleMemento = role.saveRoleState();

console.log(`================= game over =================`);
role.fight(-120, 10, 0);
role.showInfo();

console.log(`================= recovery role data, and restart game =================`);
role.recoveryRoleState(caretaker.RoleMemento);
role.showInfo();
