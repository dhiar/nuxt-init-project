<template>
  <div class="toolbar-justify">
      <div class="diagram-icons-list">
          <span><v-icon v-show="!isFullScreen" type="fullscreen" @click="canvasFullScreen">mdi-fullscreen</v-icon></span>
          <span><v-icon v-show="isFullScreen" type="fullscreen-exit" @click="canvasFullScreen">mdi-fullscreen-exit</v-icon></span>
          <span><v-icon type="redo">mdi-redo</v-icon></span>
          <span><v-icon type="download" @click="canvasDownload">mdi-cloud-download-outline</v-icon></span>
          <span><v-icon type="plus-square" @click="testGetNewData">mdi-shape-square-rounded-plus</v-icon></span>
          <span><v-icon type="minus-square">mdi-crop-square</v-icon></span>
          <span><v-icon type="question-circle" @click="testChangeDiagram">mdi-frequently-asked-questions</v-icon></span>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    onCheckBoxChange(checkedValues) {
      console.log('checked = ', checkedValues);
    },

    canvasFullScreen(){
        if(!this.isFullScreen){
          this.$parent.launchFullScreen();
        }else{
          this.$parent.exitFullscreen();
        }

    },

    canvasDownload(){
        this.$parent.canvasDownload();
    },

    testGetNewData(){
        this.$parent.testGetNewData();
    },

    testChangeDiagram(){
 
    }
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/common.scss';

.diagram-icons-list i{
    color:#00C1DE;
    margin: 15px;
}

.toolbar-justify{
    //@include box-border;
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    padding: 5px;
}
</style>