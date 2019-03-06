<template>
<div class="">
    <Modal
        :value="isVisible"
        title="添加新事件"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form :label-width="80" :model="formItem">
            <FormItem label="开始时间：">
                <TimePicker format="HH:mm" placeholder="请选择开始时间" v-model="formItem.startTime"></TimePicker>
            </FormItem>
            <FormItem label="结束时间：">
                <TimePicker format="HH:mm" placeholder="请选择结束时间" v-model="formItem.endTime"></TimePicker>
            </FormItem>
            <FormItem label="选择星期：">
                <Select v-model="formItem.weekList">
                    <Option v-for="(item, index) in formItem.weekList" :value="index">{{item}}</Option>
                </Select>
            </FormItem>
            <FormItem label="选择颜色：">
                <ColorPicker v-model="formItem.defaultColor" />
            </FormItem>
        </Form>
    </Modal>
</div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
      return {
          formItem: {
            startTime: '',
            endTime: '',
            weekList: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            defaultColor: '#19be6b'
            // color: ['红色', '黄色', '蓝色']
          }
          
      }
  },
  computed: {
      isVisible() {
        //   不要忘却了state后边的modals 不知道指代的什么
          return this.$store.state.modals.addEventModal.isVisible
      }
  },
  methods: {
      ok() {
        console.log("确认")
      },
      cancel() {
        console.log("取消")
      }
  },
  mounted() {

  }
}
</script>
