export class MovieDetail {
    constructor(private _name: string, private _occupation: string, private _debt: boolean, private _weapon: string, private _id: number) {}


  get name(): string{
    return this._name
  }
  get occupation(): string{
    return this._occupation
  }
  get debt(): boolean{
    return this._debt
  }
  get weapon(): string{
    return this._weapon
  }
  get id(): number{
    return this._id
  }

  set name(name: string) {
    this._name = name;
  }
  set occupation(occupation: string) {
    this._occupation = occupation;
  }
  set debt(debt: boolean) {
    this._debt = debt;
  }
  set weapon(weapon: string) {
    this._weapon = weapon;
  }
  set id(id: number) {
    this._id = id;
  }
}
