export default class Collisions {

    /**
     *
     * @param symbol {SVGDiagramSymbol}
     * @param point {Object}
     */
    static point(symbol, point) {
        let shadow = 30;

        const a = point.x >= (symbol.x - shadow) && point.x <= (symbol.x + symbol.w + shadow);
        const b = point.y >= (symbol.y - shadow) && point.y <= (symbol.y + symbol.h + shadow);

        return a && b;
    }
}