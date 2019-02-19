<template>
  <div class="">
      <!-- <h1>计划分解</h1> -->
      <div id="d3mind"></div>
  </div>
</template>
<script>
/* eslint-disable */
import * as d3 from 'd3'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    let width = 800;
    let height = 800;
    let layout = d3.tree()
                  .size([height, width])

    let svg = d3.select("#d3mind").append('svg')
                .attr('width', width)
                .attr('height', height)

    let node = svg.selectAll(".node")
                .append("g")
                .attr("class", "node")

    node.append("cirlce")
        .attr("r", 5)

    node.append("text")
        .attr("dx", function(d) { return d.children ? -8 : 8; })
        .attr("dy", 3)
        .text("根节点")

  }
}
</script>

