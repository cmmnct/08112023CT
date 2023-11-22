export class ColorpatchModel {
    constructor(
        private _r: number,
        private _g: number,
        private _b: number,
        private _a: number,
        private _name: string,
        private _id?: number
    ) { }

    get r(): number {
        return this._r
    }
    get g(): number {
        return this._g
    }
    get b(): number {
        return this._b
    }
    get a(): number {
        return this._a
    }
    get name(): string {
        return this._name
    }
    get id(): number | undefined {
        return this._id
    }
    get rgba(): string {
        return `rgba(${this._r},${this._g},${this._b},${this._a})`
    }

    set r(r: number) {
        if ( r < 0 ) r = 0
        if (r > 255) r = 255
        this._r = r
    }
    set g(g: number) {
        if ( g < 0 ) g = 0
        if (g > 255) g = 255
        this._g = g
    }
    set b(b: number) {
        if ( b < 0 ) b = 0
        if (b > 255) b = 255
        this._b = b
    }
    set a(a: number) {
        if (a > 1 && a < 11) a = a / 10
        if (a > 11 && a < 101) a = a /100
        this._a = a
    }
    set name(name: string) {
        this._name = name
    }


}