export class Girl {
    private _username: string;
    private _age: number;

    get username(): string {
        return this._username;
    }

    public constructor(username:string, age: number) {
        this._username = username;
        this._age  = age;
    }
}