import SVGDiagramSymbol from "./SVGDiagramSymbol.js";
import {render} from "vue";

export default class RectSymbol extends SVGDiagramSymbol {

    constructor(parent, setup) {
        super(parent, 'rect');
        this.text.textContent = setup.content;
        this.w = setup.w;
        this.h = setup.h;
        this.x = setup.x;
        this.y = setup.y;
        this.render();
    }

    render() {
        this.poligon.setAttribute('width', this.w);
        this.poligon.setAttribute('height', this.h);
        this.poligon.setAttribute('x', 0);
        this.poligon.setAttribute('y', 0);
        this.poligon.classList.add('diagram-symbol-default');
        this.text.setAttribute('x', Math.ceil(this.w/2));
        this.text.setAttribute('y', Math.ceil(this.h/2));
        this.text.setAttribute('text-anchor', 'middle');
        this.text.setAttribute('dominant-baseline', 'middle');
        this.g.setAttribute('transform', `translate(${this.x},${this.y})`);
        let x = this.x + 3;
        let y = this.y + 3;
        this.g.setAttribute('transform', `translate(${x},${y})`);
        this.fitPosition()
    }

}