<template>
  <div class="container">
      <div id="calendar" style="height: 800px;"></div>
  </div>
</template>
<script>
/* eslint-disable */
import Calendar from 'tui-calendar' /* ES6 */
import "tui-calendar/dist/tui-calendar.css"

export default {
  data() {
      return {

      }
  },
  mounted() {
    this.initCalendar()
  },
  methods: {
    initCalendar() {

      let calendar = new Calendar('#calendar', {
        defaultView: 'month',
        taskView: true,
        template: {
          monthGridHeader: function(model) {
            let date = new Date(model.date);
            let template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
            return template;
          }
        }
      })

      calendar.createSchedules([
        {
            id: '1',
            calendarId: '1',
            title: 'my schedule',
            category: 'time',
            dueDateClass: '',
            start: '2019-03-05T22:30:00+09:00',
            end: '2019-03-08T02:30:00+09:00'
        },
        {
            id: '2',
            calendarId: '1',
            title: 'second schedule',
            category: 'time',
            dueDateClass: '',
            start: '2019-03-12T17:30:00+09:00',
            end: '2019-03-18T17:31:00+09:00',
            isReadOnly: true    // schedule is read-only
        }
      ]);

    }
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


