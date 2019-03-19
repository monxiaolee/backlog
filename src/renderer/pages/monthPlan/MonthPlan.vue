<template>
  <div class="container">
    <div id="calendar" style="height: 100%;"></div>
    <Modal
        v-model="eventModal"
        title="添加事件"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form :model="eventForm">
          <FormItem>
            <Input type="text" v-model="eventForm.address" placeholder="位置">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <Row>
            <i-col span = "12">
              <DatePicker type="datetime" v-model="eventForm.startDate" placeholder="开始时间"></DatePicker>
            </i-col>
            <i-col span = "12">
              <DatePicker type="datetime" v-model="eventForm.endDate" placeholder="结束日期"></DatePicker>
            </i-col>
          </Row>
        </Form>
    </Modal>
  </div>
</template>
<script>
/* eslint-disable */
import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

export default {
  data() {
      return {
        eventModal: false,
        eventForm: {
          address: '',
          startDate: '',
          endDate: ''
        }
      }
  },
  methods: {
    ok() {
      this.eventModal = false
    },
    cancel() {
      this.eventModal = false
    }
  },
  mounted() {
    let calendar = new Calendar('#calendar', {
      defaultView: 'month',
      taskView: true,
      template: {
        monthGridHeader: function(model) {
          var date = new Date(model.date);
          var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
          return template;
        }
      }
    });

    calendar.createSchedules([
      {
          id: '1',
          calendarId: '1',
          title: 'my schedule',
          category: 'time',
          dueDateClass: '',
          start: '2019-03-01T22:30:00+09:00',
          end: '2019-03-12T02:30:00+09:00'
      },
      {
          id: '2',
          calendarId: '2',
          title: 'second schedule',
          category: 'time',
          dueDateClass: '',
          start: '2013-03-06T17:30:00+09:00',
          end: '2019-03-19T17:31:00+09:00',
          isReadOnly: true    // schedule is read-only
      }
    ])

    calendar.on('clickSchedule', function(event) {
      let schedule = event.schedule
      console.log(schedule)
    })

    calendar.on('beforeCreateSchedule', (event) => {
        console.log('点击', event)
        this.eventModal = true
    })

    calendar.setTheme({
      'month.dayname.height': '31px',
      'common.dayname.color': '#333',
      'common.backgroundColor': '#f00',
      'month.dayname.borderBottom': '1px solid #e5e5e5' // Not valid key  will be return.
    })

    calendar.setCalendarColor('1', {
        color: '#e8e8e8',
        bgColor: '#585858',
        borderColor: '#a1b56c'
    })
  }
}
</script>
<style scoped>
.container {
  padding: 12px;
  position: absolute;
  left: 60px;
  width: calc(100% - 60px);
  height: calc(100% - 50px);
}
</style>


