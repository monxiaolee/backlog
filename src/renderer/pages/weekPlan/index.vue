<template>
<div class="">
    <!-- 顶部菜单 -->
    <div class="top-bar">
      <ul>
        <!-- <li class="selectedWeek">Week A</li>
        <li class="changeWeekBTN"><i class="icon-repeat"></i></li>
        <li class="bgBTN"><i class="icon-picture"></i></li> -->
        <li class="addBTN" @click="showEventModal"><Icon type="android-add"></Icon></li>
        <!-- <li class="editBTN"><i class="icon-edit"></i></li>
        <li class="deleteBTN"><i class="icon-garbage"></i></li>
        <li class="importexportBTN"><i class="icon-importexport"></i></li> -->
      </ul>
      <!-- <ul id="weeks">
        <li>ASD</li>
      </ul> -->
    </div>
    
    <div class="days-bar">
      <ul>
        <template v-for="(item, index) in weekList">
          <li :id="'day' + index">{{item}}</li>
        </template>
      </ul> 
    </div>

    <div class="container">
      <div class="innerContainer">
        <div class="week">
          <div class="day">
              <div class="lesson">
                <!-- <i id="Sunday-' + k + '" class="material-icons deleteItem">delete_forever</i>
                <i id="Sunday-' + k + '" class="material-icons editItem">create</i> -->
                <div class="sideColor"></div>
                <p id="time">7:40-8:25</p>
                <p id="className">事件名称</p>
              </div>
            </div>
        </div>
      </div>
    </div>

    <new-event-modal></new-event-modal>
</div>
</template>
<script>
import NewEventModal from '../components/modals/NewEventModal.vue'
import {mapActions} from 'vuex'
/* eslint-disable*/
export default {
  data () {
      return {
        weekList: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      }
  },
  methods: {
    ...mapActions([
      'showEventModal'
    ])
  },
  components: { NewEventModal }
}
</script>
<style scoped>
.top-bar {
  z-index: 99;
  position: absolute;
  top: 0;
  left: 60px;
  width: calc(100vw - 60px);
  height: 50px;
  background: #2a2a2a; 
}
.top-bar ul {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
}
.top-bar ul li {
  position: relative;
  float: left;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  list-style: none;
  margin: 0 10px 0 10px;
  cursor: pointer;
}
.top-bar ul li i {
  cursor: pointer;
  line-height: 60px;
  font-size: 24px;
  color: white;
}
.top-bar ul li:hover i {
  color: #00FF88 !important;
}

.days-bar {
  position: absolute;
  top: 50px;
  left: 60px;
  width: calc(100vw - 60px);
  height: 36px;
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
  line-height: 36px;
  text-transform: uppercase;
  /* font-family: "Exo 2"; */
  font-size: 16px;
  font-weight: 300;
  color: white;
}

.container {
  position: absolute;
  top: 100px;
  left: 60px;
  width: calc(100% - 60px);
  height: calc(100vh - 120px);
  padding-top: 20px;
}

.container .innerContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 20px);
  padding-top: 20px;
  overflow-y: auto;
}

.container .innerContainer .week {
  position: absolute;
  left: 0;
  width: 100%;
}
.container .innerContainer .week .day {
  position: relative;
  float: left;
  width: 14.28%;
  height: auto;
}

.container .innerContainer .week .day .lesson {
  position: relative;
  font-size: 14px;
  width: 80%;
  height: 100px;
}
.container .innerContainer .week .day .lesson .sideColor {
  position: absolute;
  top: 0;
  left: 6px;
  width: 5px;
  height: 100%;
  background: #00FF88;
}

.container .innerContainer .week .day .lesson #className {
  position: absolute;
  top: 0;
  left: 26px;
  font-weight: 300;
  color: white; 
}
/* .container .innerContainer .week .day .lesson #classRoom {
  position: absolute;
  bottom: 0;
  left: 26px;
  font-weight: 300;
  color: white; 
} */
/* .container .innerContainer .week .day .lesson #teacherName {
  position: absolute;
  bottom: 25px;
  left: 26px;
  font-weight: 300;
  color: white; 
} */
.container .innerContainer .week .day .lesson #time {
  color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 26px;
}
.container .innerContainer .week .day .lesson .deleteItem {
  display: none;
  position: absolute;
  bottom: 20px;
  right: 0;
  color: white;
  cursor: pointer; 
}
.container .innerContainer .week .day .lesson .deleteItem:hover {
  color: #00FF88; 
}
.container .innerContainer .week .day .lesson .editItem {
  display: none;
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: white;
  cursor: pointer; 
}
.container .innerContainer .week .day .lesson .editItem:hover {
  color: #00FF88; 
}
</style>


