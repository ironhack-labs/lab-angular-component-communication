export class Character {
    constructor(
        private _name: string,
        private _occupation: string,
        private _weapon: string,
        private _debt: boolean,
        private _show: boolean,
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

    get show(): boolean {
        return this._show;
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

    set show(show: boolean) {
        this._show = show;
    }
}
