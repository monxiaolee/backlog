<template>
  <div ref="main" id="jsmind_container" style="width: 100%; height: 100%; position: absolute; left: 60px;">
      <popup></popup>
  </div>
</template>
<script>
/* eslint-disable */
import 'jsmind/style/jsmind.css'
import jsMind from 'jsmind/js/jsmind'
import 'jsmind/js/jsmind.draggable'
import 'jsmind/js/jsmind.screenshot'

import popup from './popup'
import local from '../../utils/localSave'

import jmOpitions from './mind_config/jsmind_options'
import jmDefaultMindmap from './mind_config/jsmind_default_mindmap'

export default {
  data() {
    return {
      
    }
  },
  components: {
    popup
  },
  methods: {
    init() {
      this.jm = new jsMind(jmOpitions);
      let localMind = local.getLocal();
      if(localMind) {
        this.jm.show(localMind)
      } else {
        this.jm.show(jmDefaultMindmap)
      }

      let _jm = this.js;
      this.jm.add_event_listener((type, data) => {
        if (type === 3) {
          console.log("点击了三")
        }
      })
      
    }
  },
  mounted() {
    this.init()
  }
}
</script>


<style lang="scss">

</style>

