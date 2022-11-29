export class ListItem {
    constructor(
        private _name: string,
        private _id: number,
    ) { }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }
}
