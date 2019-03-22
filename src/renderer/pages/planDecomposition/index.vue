<template>
  <div class="" ref="d3mindWrapper">
      <!-- <h1>计划分解</h1> -->
      <!-- 
      <button @click="createNew()">新建</button>
      <button @click="addNodes()">新建节点</button> 
      -->
      <div id="d3mind"></div>
  </div>
</template>
<script>
/* eslint-disable */
import * as d3 from 'd3'

export default {
  data() {
    return {
      treeData: {
        'name': '中国',
        'children': [
          {
            'name': '浙江',
            'children':
            [
              {'name': '杭州'},
              {'name': '宁波'},
              {'name': '温州'},
              {'name': '绍兴'}
            ]
          },
          {
            'name': '广西',
            'children': [
              {
                'name': '桂林',
                'children':
                [
                  {'name': '秀峰区'},
                  {'name': '叠彩区'},
                  {'name': '象山区'},
                  {'name': '七星区'}
                ]
              },
              {'name': '南宁'},
              {'name': '柳州'},
              {'name': '防城港'}
            ]
          },
          {
            'name': '黑龙江',
            'children': [
              {'name': '哈尔滨'},
              {'name': '齐齐哈尔'},
              {'name': '牡丹江'},
              {'name': '大庆'}
            ]
          },
          {
            'name': '新疆',
            'children':
              [
                {'name': '乌鲁木齐'},
                {'name': '克拉玛依'},
                {'name': '吐鲁番'},
                {'name': '哈密'}
              ]
          }
        ]
      }
    }
  },
  methods: {


    treeDiagram() {
      // let width = 800
      // let height = 600
      let _this = this
      let svg = d3.select('#d3mind')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 1000)
      
      // 初始化树状图数据获取器
      let tree = d3.tree()
        .size([500, 500])
        .separation(function(a, b) {
          return (a.parent === b.parent ? 1 : 2) / a.depth
        })

      let hierarchyData = d3.hierarchy(_this.treeData)
        .sum(function(d) {
          return d.value
        })

      // 初始化树状图
      let treeData = tree(hierarchyData)
      // 获取节点
      let nodes = treeData.descendants()
      // 获取边,也就是连线
      let links = treeData.links()
      // 绘制线
      let g = svg.append('g').attr('transform', 'translate(40,0)')
      g.selectAll('.link')
        .data(links)
        .enter().append('path')
        .attr('class', 'link')
        // .style('fill', '#cccccc')
        .attr('d', d3.linkHorizontal()
          .x(function (d) { return d.y })
          .y(function (d) { return d.x }))
      // 绘制文本和节点
      g.selectAll('.node')
        .data(nodes)
        .enter().append('g')
        .attr('class', function (d) { return 'node' + (d.children ? ' node--internal' : ' node--leaf') })
        .attr('transform', function (d) { return 'translate(' + d.y + ',' + d.x + ')' })
        .on('click', this.editNode)
      g.selectAll('.node').append('circle')
        .attr('r', 5)
        .style('fill', 'green')
      g.selectAll('.node').append('text')
        .attr('dy', 3)
        .attr('x', function (d) { return d.children ? -8 : 8 })
        .style('text-anchor', function (d) { return d.children ? 'end' : 'start' })
        .text(function (d) {
          return d.data.name
        })
        .style('font-size', '11px')
      
    },
    update() {

    },

    addNodes() {

    },

    editNode(d) {
      console.log("点击的点。。。")
      console.log(d)
    }
  },
  mounted() {
    this.treeDiagram()
  }
}
</script>


<style>
#d3mind {
  width: 100%;
  height: 100%;
}

/* svg {
  width: 100%;
  height: 100%;
} */

#d3mind .every {
  width: 400px;
  height: 425px;
  margin:15px;
  float: left;
}
#d3mind .every h3 {
  margin:0;
}
#d3mind .every h3 .button {
  float: right;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  padding: 2px 8px;
  border:1px solid #ccc;
  background: yellowgreen;
  border-radius: 4px;
}
#d3mind .every h3 .button:hover {
  background: violet;
}
#d3mind .every .svg {
  width: 400px;
  height: 400px;
}

#d3mind .node {
  fill: #fff;
}
</style>

