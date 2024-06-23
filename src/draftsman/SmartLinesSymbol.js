import SVGSymbol from "./SVGSymbol.js";
import LineSymbol from "./LineSymbol.js";
import Collisions from "./Collisions.js";
import VerseModel from "../models/VerseModel.js";
import PointModel from "../models/PointModel.js";


export default class SmartLinesSymbol extends SVGSymbol {
    /** @type {SVGElement} */
    g;
    connector;

    /** @type {SVGDiagramSymbol} */
    fromElm;
    /** @type {SVGDiagramSymbol} */
    targetElm;

    /** @type {VerseModel} */
    from


    /** @type {VerseModel} */
    target

    versor = {x: 0, y: 0, dg: 0};
    dot = {x: 0, y: 0};
    points = [];

    constructor(parent, elmA, elmB, flagA, flagB) {
        super();
        this.fromElm = elmA;
        this.targetElm = elmB;
        this.g = this.mkNS('g');
        this.connector = this.mkNS('path');
        this.connector.classList.add('diagram-connector-default')
        this.from = elmA.pointByFlag(flagA);
        this.target = elmB.pointByFlag(flagB);

        let middleware = {
            x: Math.ceil((this.from.x + this.target.x)/2),
            y: Math.ceil((this.from.y + this.target.y)/2)
        };

        this.margin = 30;
        this.points = [this.from];
        let marginFrom = this.marginPoint(this.fromElm, this.from, this.margin);
        this.points.push(marginFrom);
        this.points.push(this.middlewarePoint(marginFrom, middleware));
        let marginTo = this.marginPoint(this.targetElm, this.target, this.margin);
        this.points.push(this.middlewarePoint(marginTo, middleware));
        this.points.push(marginTo);
        this.points.push(this.target);

        this.draw();
        this.g.appendChild(this.connector);
        parent.appendChild(this.g);
    }


    draw() {
        let wayPoints = this.points.map((p, i) => {
            return i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`;
        });
        this.connector.setAttribute('d', wayPoints.join(' '));
    }


    /**
     * @param elm {SVGDiagramSymbol}
     * @param target {PointModel}
     */
    marginPoint(elm, target) {
        let v = this.verse({x: elm.cx, y: elm.cy}, target);
        let x = target.x + (v.x * this.margin);
        let y = target.y + (v.y * this.margin);
        return {x, y};
    }

    middlewarePoint(from, to) {
        let x = from.x;
        let y = to.y;
        return {x, y};
    }

    verse(a, b) {
        let rad = Math.atan2(b.y - a.y, a.x - b.x);
        let sx = Math.cos(rad) > 0 ? -1 : 1;
        let sy = Math.sin(rad) > 0 ? 1 : -1;
        let v = new VerseModel();
        v.x = Math.round(Math.pow(Math.cos(rad), 2)) * sx;
        v.y = Math.round(Math.pow(Math.sin(rad), 2)) * sy;
        v.dg = this.calcDg(v.x, v.y);
        return this.fitZero(v);
    }

    versorDg(dg) {
        let radians = dg * (Math.PI / 180);
        let x = parseFloat(Math.sin(radians).toFixed(5));
        let y = parseFloat(Math.cos(radians).toFixed(5));
        return this.fitZero({x, y, dg});
    }

    fitZero(p) {
        p.x = Object.is(p.x, -0) ? 0 : p.x;
        p.y = Object.is(p.y, -0) ? 0 : p.y;
        return p;
    }

    calcDg(x, y) {
        return Math.atan2(x,-y) * 180 / Math.PI
    }



}