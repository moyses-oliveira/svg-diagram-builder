import SVGDiagramSymbol from "./SVGDiagramSymbol.js";

export default class CircleSymbol extends SVGDiagramSymbol {

    r=0;
    constructor(parent, setup) {
        super(parent, 'circle');
        this.text.textContent = setup.content;
        this.setRadius(setup.d/2);
        this.x = setup.x;
        this.y = setup.y;
        this.render();
        this.parent.appendChild(this.g);
    }

    setRadius(r) {
        this.r = r;
        this.w = r*2;
        this.h = r*2;
    }

    render() {
        this.poligon.setAttribute('r', this.r);
        this.poligon.setAttribute('cx', this.r);
        this.poligon.setAttribute('cy', this.r);
        this.poligon.classList.add('diagram-symbol-default');
        this.text.setAttribute('x', this.r);
        this.text.setAttribute('y', this.r);
        this.text.setAttribute('text-anchor', 'middle');
        this.text.setAttribute('dominant-baseline', 'middle');
        let x = this.x + 3;
        let y = this.y + 3;
        this.g.setAttribute('transform', `translate(${x},${y})`);
        this.fitPosition()
    }



}