export class Character {
    constructor(
        private _name: string,
        private _occupation: string,
        private _weapon: string,
        private _debt: boolean
    ) {}
    
    get name(): string {
        return this._name;
    }

    get occupation(): string {
        return this._occupation;
    }

    get weapon(): string {
        return this._weapon;
    }

    get debt(): boolean {
        return this._debt;
    }

    set name(name: string) {
        this._name = name;
    }

    set occupation(occupation: string) {
        this._occupation = occupation;
    }
    
    set weapon(weapon: string) {
        this._weapon = weapon;
    }
    
    set debt(debt: boolean) {
        this._debt = debt;
    }
}
