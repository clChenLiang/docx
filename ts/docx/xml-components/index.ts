export interface XmlComponent {

}

interface AttributesProperties {
    val?: string;
    color?: string;
    space?: string;
    sz?: string;
    type?: string;
}

export class Attributes implements XmlComponent {
    private _attrs: Object;

    constructor(properties?: AttributesProperties) {
        this._attrs = properties

        if (!properties) {
            this._attrs = {};
        }
    }
}

export class Run implements XmlComponent {
    protected r: Array<XmlComponent>;

    constructor() {
        this.r = new Array<XmlComponent>();
    }
}

export class Text implements XmlComponent {
    private t: string;

    constructor(text: string) {
        this.t = text;
    }
}