<template>
<div class="">
    <top-bar></top-bar>
    <sidebar></sidebar>
    <div id="wrapper">
        <app-main></app-main>
    </div>

    <footer @click="open('https://github.com/monxiaolee')">
      日常待办
      <Icon type="ios-heart"></Icon>
      by Monxiao Lee
    </footer>
</div>
</template>
<script>
/* eslint-disable */
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import AppMain from './AppMain'
export default {
  data() {
      return {

      }
  },
  components: {
      TopBar,
      Sidebar,
      AppMain
  },
  methods: {

  }
}
</script>
<style>
#wrapper {
    height: 100vh;
    width: 100vw;
}

#wrapper.fixedTabs {
    margin-top: 35px;
}

#wrapper .content {
    width: calc(100vw - 70px);
    float: right;
}
footer {
    position: fixed;
    bottom: 0;
    background-color: #5a6376;
    color: white;
    text-align: center;
    width: 100%;
    cursor: pointer;
    opacity: .4;
  }
</style>


