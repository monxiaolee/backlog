<template>
<div class="">
    <!-- 顶部菜单 -->
    <!-- <div class="top-bar">
        <ul></ul>
    </div> -->
    
    <div class="days-bar">
      <ul>
        <li id="day1">星期一</li>
        <li id="day2">星期二</li>
        <li id="day3">星期三</li>
        <li id="day4">星期四</li>
        <li id="day5">星期五</li>
        <li id="day6">星期六</li>
        <li id="day0">星期日</li>
      </ul>
    </div>
</div>
</template>
<script>
/* eslint-disable*/
export default {
  data () {
      return {

      }
  }
}
</script>
<style>
.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background: #2a2a2a;
}
.days-bar {
  position: absolute;
  top: 0px;
  left: 60px;
  width: calc(100vw - 60px);
  height: 50px;
  background: #2a2a2a;
}
.days-bar ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.days-bar ul li {
    position: relative;
    float: left;
    width: 14.28%;
    height: 100%;
    list-style: none;
    text-align: center;
    line-height: 50px;
    text-transform: uppercase;
    /* font-family: "Exo 2"; */
    font-size: 16px;
    font-weight: 300;
    color: white;
}


</style>


