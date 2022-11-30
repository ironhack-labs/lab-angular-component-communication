export class Character {
  constructor(
    private _name: string,
    private _occupation: string,
    private _debt: boolean,
    private _weapon: string,
    private _id: number,
    private _reveal: boolean
  ) {}
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get occupation(): string {
    return this._occupation;
  }
  set occupation(occupation: string) {
    this._occupation = occupation;
  }

  get weapon(): string {
    return this._weapon;
  }
  set weapon(weapon: string) {
    this._weapon = weapon;
  }

  get debt(): boolean {
    return this._debt;
  }
  set debt(debt: boolean) {
    this._debt = debt;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get reveal(): boolean {
    return this._reveal;
  }
  set reveal(reveal: boolean) {
    this._reveal = reveal;
  }
}
