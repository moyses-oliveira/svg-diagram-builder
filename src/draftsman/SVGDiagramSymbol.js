import SVGSymbol from "./SVGSymbol.js";

export default class SVGDiagramSymbol extends SVGSymbol {

    parent;
    /** @type {SVGElement} */
    g;
    poligon;
    text;
    w = 0;
    h = 0;
    x = 0;
    y = 0;
    cx = 0;
    cy = 0;

    constructor(parent, nsType) {
        super();
        const svgNS = "http://www.w3.org/2000/svg";
        this.g = this.mkNS('g');
        this.poligon = this.mkNS(nsType);
        this.text = this.mkNS('text');
        this.parent = parent;
        this.g.appendChild(this.poligon);
        this.g.appendChild(this.text);
        this.parent.appendChild(this.g);
    }


    pointByFlag(flag) {
        const mx = this.x + Math.abs(this.w / 2);
        const my = this.y + Math.abs(this.h / 2);
        let strFlag = flag;
        let flagIndex = ['T', 'R', 'B', 'L'];
        if (Number.isInteger(flag))
            strFlag = flagIndex[flag];

        switch (strFlag) {
            case 'T':
                return {x: mx, y: this.y + 3, flag: 'T'};
            case 'B':
                return {x: mx, y: this.y + this.h + 3, flag: 'B'};
            case 'L':
                return {x: this.x + 3, y: my, flag: 'L'};
            case 'R':
                return {x: this.x + this.w + 3, y: my, flag: 'R'};
        }
    }

    fitPosition() {
        this.cx = this.x + Math.ceil(this.w / 2);
        this.cy = this.y + Math.ceil(this.h / 2);
    }

}