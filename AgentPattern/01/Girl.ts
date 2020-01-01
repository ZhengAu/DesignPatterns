export class Girl {
    get username(): string {
        return this._username;
    }
    private _username: string;
    private age: number;

    public constructor(username: string, age: number) {
        this._username = username;
        this.age = age;
    }
}