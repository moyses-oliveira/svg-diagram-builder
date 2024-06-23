import SVGDiagramSymbol from "./SVGDiagramSymbol";
import LineSymbol from "./LineSymbol.js";

export default class ConnectSymbols {

    /** @type {LineSymbol[]} */
    static lines = []


    /**
     * @param svg {SVGElement}
     * @param a {SVGDiagramSymbol}
     * @param b {SVGDiagramSymbol}
     * @param flagA {string}
     * @param flagB {string}
     */
    static straight(svg, a, b, flagA, flagB) {
        const pa = a.pointByFlag(flagA);
        const pb = b.pointByFlag(flagB);
        this.lines.push(LineSymbol.mk(svg, pa.x, pa.y, pb.x, pb.y));
    }

    static clear() {
        this.lines.forEach(l => l.remove());
        this.lines = [];
    }

}