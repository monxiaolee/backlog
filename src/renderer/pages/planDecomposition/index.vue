<template>
  <div class="">
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

<script>
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
      let width = 400
      let height = 400
      let _this = this
      let svg = d3.select('#d3mind')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      
      // 初始化树状图数据获取器
      let tree = d3.tree()
        .size([width, height - 80])
        .separation(function(a, b) {
          return (a.parent === b.parent ? 1 : 2) / a.depth
        })

      let hierarchyData =  d3.hierarchyData(_this.treeData)
        .sum(function(d) {
          return d.value
        })
    }
  },
  mountd() {
    this.treeDiagram()
  }
}
</script>

