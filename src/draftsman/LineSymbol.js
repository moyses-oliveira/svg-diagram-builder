import SVGSymbol from "./SVGSymbol.js";

export default class LineSymbol extends SVGSymbol {

    /** @type {SVGElement} */
    line;

    constructor(parent, x1, y1, x2, y2) {
        super();
        this.line = this.mkNS("line");
        Object.entries({x1, y1, x2, y2}).forEach(([key, value]) => this.line.setAttribute(key, value));
        this.line.classList.add('diagram-symbol-default');
        parent.appendChild(this.line);

    }


    static mk(svg, x1, y1, x2, y2) {
        return new LineSymbol(svg, x1, y1, x2, y2);
    }

    remove() {
        this.line.remove();
    }

}