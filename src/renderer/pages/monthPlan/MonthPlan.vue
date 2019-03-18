<template>
  <div class="container">
      <full-calendar :events="fcEvents"></full-calendar>
  </div>
</template>
<script>
/* eslint-disable */
// import Calendar from 'tui-calendar'
// import "tui-calendar/dist/tui-calendar.css"

// import 'fullcalendar/dist/fullcalendar.css'
import fullCalendar from 'vue-fullcalendar'

export default {
  data() {
      return {
        fcEvents: [
          {
              title  : 'event1',
              start  : '2019-03-16',
          },
          {
              title  : 'event2',
              start  : '2019-03-19',
              end    : '2019-03-22',
          },
          {
              title  : 'event3',
              start  : '2019-03-09T12:30:00',
              allDay : false,
          }
        ]
      }
  },
  components: {fullCalendar},
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style scoped>
.container {
  padding: 12px;
  position: absolute;
  left: 60px;
  width: calc(100% - 60px);
  /* height: 100vh; */
}
</style>


