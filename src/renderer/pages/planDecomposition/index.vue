<template>
  <div class="">
      <!-- <h1>计划分解</h1> -->
      <button @click="createNew()">新建</button>
      <button @click="addNodes()">新建节点</button>
      <div id="d3mind"></div>
  </div>
</template>
<script>
/* eslint-disable */
import * as d3 from 'd3'

let m = [20, 120, 20, 120],
      //w = 1280 - m[1] - m[3],
    w = 900 - m[1] - m[3],
    h = 500 - m[0] - m[2],
    i = 0,
    root;

let vis;
let tree;
export default {
  data() {
    return {

    }
  },
  methods: {

    loadJSON(fileName) {
      console.log(fileName)

      d3.json(fileName, function(json) {
        console.log(json)
      })

      // d3.json(fileName, (json) => {
      //   console.log(json)
      //   var i=0, l=json.children.length;
      //   window.data = root = json;
      //   root.x0 = h / 2;
      //   root.y0 = 0;
        
      //   json.left = [];
      //   json.right = [];
      //   for(; i<l; i++){
      //     if(i%2){
      //       json.left.push(json.children[i]);
      //       json.children[i].position = 'left';
      //     }else{
      //       json.right.push(json.children[i]);
      //       json.children[i].position = 'right';
      //     }
      //   }

      //   this.update(root, true);
      //   this.selectNode(root);
      // })
    },

    toArray(item, arr, d) {
      arr = arr || [];
      var dr = d || 1;
      var i = 0, l = item.children?item.children.length:0;
      arr.push(item);
      if(item.position && item.position==='left'){
        dr = -1;
      }
      item.y = dr * item.y;
      for(; i < l; i++){
        this.toArray(item.children[i], arr, dr);
      }
      return arr;
    },

    elbow(d, i) {
      let source = calcLeft(d.source)
      let target = calcLeft(d.target)

      let hy = (target.y - source.y) / 2
      return "M" + source.y + "," + source.x
                   + "H" + (source.y+hy)
                   + "V" + target.x + "H" + target.y

    },

    createNew() {
      console.log("点击新建")
      root = {name: 'Root', children: [], left: [], right: []};
      this.update(root, true);
      this.selectNode(root);
    },

    addNodes() {
      root.left.push({name: 'bar'})
      this.update(root)
    },

    update(source, slow) {
      let duration = (d3.event && d3.event.altKey) || slow ? 1000 : 100;

      // let nodesLeft = tree.size([h, (w/2) - 20])
      //                     .children(function(d) {
      //                       return (d.depth === 0)?d.left:d.children
      //                     })
      //                     .nodes(root)
      //                     .reverse()

      // let nodesRight = tree.size([h, w/2])
      //                      .children(function(d){
      //                        return (d.depth===0)?d.right:d.children;
      //                      })
      //                      .nodes(root)
      //                      .reverse();

      root.children = root.left.concat(root.right)
      root._children = null

      let nodes = this.toArray(source)

      // 为什么能取到呢
      let node = vis.selectAll("g.node")
                    .data(nodes, function(d) { return d.id || (d.id = ++i) });

      let nodeEnter = node.enter().append("svg:g")
                          .attr("class", function(d){ return d.selected?"node selected":"node"; })
                          .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })

          nodeEnter.append("svg:circle")
                   .attr("r", 10);

          nodeEnter.append("svg:text")
                   .attr("x", function(d){ return d.children || d._children ? -10 : 10 })
                   .attr("dy", 14)
                   .attr("text-anchor", "middle")
                   .text(function(d) { return (d.name || d.text) })
                   .style("fill-opacity", 1)

      let nodeUpdate = node.transition()
                           .duration(duration)
                           .attr("transform", function(d) { 
                             "translate(" + d.y + "," + d.x + ")";
                           })
          
          nodeUpdate.select("text")
                    .text(function(d) { return (d.name || d.text) })

          nodeUpdate.select("circle")
                    .attr("r", 4.5)

      let nodeExit = node.exit().transition()
                                .duration(duration)
                                .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                                .remove();

          nodeExit.select("circle")
              .attr("r", 1e-6);

          nodeExit.select("text")
              .style("fill-opacity", 1e-6)

      // 更新连线

      let testObject = {
        "name": "Eve",
        "children": [
          {
            "name": "Cain"
          },
          {
            "name": "Seth",
            "children": [
              {
                "name": "Enos"
              },
              {
                "name": "Noam"
              }
            ]
          },
          {
            "name": "Abel"
          },
          {
            "name": "Awan",
            "children": [
              {
                "name": "Enoch"
              }
            ]
          },
          {
            "name": "Azura"
          }
        ]
      }

      console.log("连线数据生成。。。")
      // console.log(nodes)
      // console.log(nodes.links)
      // nodes.links(function(d) {
      //   console.log(d)
      // })
      console.log(tree.links(nodes))


      let link = vis.selectAll("path.link")
                    .data(tree.links(nodes), function(d) { return d.target.id })
                    // .data(nodes.links())

      

      // link.enter().insert("svg:path", "g")
      //     .attr("class", "link")
      //     .attr("d", function(d) {
      //       let o = {x: source.x0, y: source.y0};
      //       return this.elbow({source: o, target: o});
      //     })
      //     .transition()
      //     .duration(duration)
      //     .attr("d", this.elbow)

      // // Transition links to their new position.
      // link.transition()
      //     .duration(duration)
      //     .attr("d", this.elbow);

      // // Transition exiting nodes to the parent's new position.
      // link.exit().transition()
      //     .duration(duration)
      //     .attr("d", function(d) {
      //       var o = {x: source.x, y: source.y};
      //       return this.elbow({source: o, target: o});
      //     })
      //     .remove();


      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      })
    },
    
    selectNode() {
      console.log("默认选中节点")
    }
  },
  mounted() {

    d3.json('../../../../static/json/data.json', function(json) {
      console.log("首次加载数据")
      console.log(json)
    })

    tree = d3.tree()
          .size([h, w]);

    vis = d3.select("#d3mind")
            .append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
            .append("svg:g")
            //.attr("transform", "translate(" + m[3] + "," + m[0] + ")")
            .attr("transform", "translate(" + (w/2+m[3]) + "," + m[0] + ")")

    // let diagonal = d3.line()
    //     // .projection(function(d) { return [d.y, d.x] })
    //     .x(function(d) { console.log(d.date) })
    //     .y(function(d) { console.log(d.value) })


    this.loadJSON('../../../../static/json/data.json')

    // this.createNew()

  }
}
</script>
<style>
.node circle {
  cursor: pointer;
  fill: #fff;
  stroke: steelblue;
  stroke-width: 1.5px;
}

.node text {
  font-size: 14px;
}

path.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 1.5px;
}

.node.selected circle {
  fill: green;
}
</style>

