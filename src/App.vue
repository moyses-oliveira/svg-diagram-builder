<template>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" ref="svg_container">


      </svg>
    </div>
</template>

<script>
import CircleSymbol from "./draftsman/CircleSymbol.js";
import RectSymbol from "./draftsman/RectSymbol.js";
import ConnectSymbols from "./draftsman/ConnectSymbols.js";
import SmartLinesSymbol from "./draftsman/SmartLinesSymbol.js";

export default {
  data() {
    return {
    }
  },
  mounted() {
    let svg = this.$refs.svg_container;
    let start = new CircleSymbol(svg,{x: 450, y: 350, d: 100, content:'abacate'});
    let step1 = new RectSymbol(svg,{x: 150, y: 250, w: 200, h: 50, content:'abacate'});
    // ConnectSymbols.straight(svg, start, step1, 'R', 'L');
    // ConnectSymbols.straight(svg, start, step1, 'L', 'L');
    new SmartLinesSymbol(svg, start, step1, 'T', 'R');



  },
}

</script>

<style scoped>
::v-deep(.diagram-symbol-default) {
  stroke-width: 3;
  stroke: darkgray;
  fill: lightblue;
}
::v-deep(path.diagram-connector-default) {
  stroke-width: 1;
  stroke: darkgray;
  fill: transparent;
  stroke-dasharray: 4, 4;
}

</style>
