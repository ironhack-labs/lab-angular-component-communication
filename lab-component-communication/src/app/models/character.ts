export class Character {
    constructor(private _name: string, private _occupation:string, private _debt: boolean, private _weapon: string, private _id: number, private _isShown: boolean){}

    get name(): string{
        return this._name;
    }
    get occupation(): string{
        return this._occupation;
    }

    get debt(): boolean{
        return this._debt;
    }
    get weapon(): string{
        return this._weapon;
    }
    get id(): number{
        return this._id;
    }

    get isShown():boolean{
        return this._isShown;
    }

    set isShown(isShown: boolean){
        this._isShown = isShown;
    }

    set name(name: string){
        this._name = name;
    }

    set occupation(occupation: string){
        this._occupation = occupation;
    }

    set debt(debt: boolean){
        this._debt = debt;
    }

    set weapon(weapon: string){
        this._weapon = weapon;
    }

    set id(id: number){
        this._id = id;
    }
}
