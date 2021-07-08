<template>
  <div class="sidebar-card">
      <div style="display:flex;align-items:center">
        <div class="card-title"/>
        <span style="font-weight:bold;"> &nbsp;&nbsp;{{cardTitle}}</span>
      </div>

      <!--作业详情部分-->
      <div>ID：<span style="color:#00C1DE;cursor:pointer;">33098</span></div>
      <div>Test：ini test</div>
      <div>Type：ini test</div>
      <div>Join：ini test</div>
      <hr style="color:#666666;" />
  </div>
</template>
<script>
export default {
  data () {
    return {
        isExtend:true,
    }
  },
  props: {
    tableDetail: {
      type: Object,
      default: null
    },
    load: {
      type: Boolean,
      default: false
    },
    cardTitle: {
      type: String,
      default: '' 
    }
  },
  computed: {

  },

  methods: {


  },
};
</script>

<style scoped lang='scss'>
@import '~assets/common.scss';
.sidebar-card{
    width: 350px;
    margin: 0px 5px;
}

.card-title{
    width: 10px;
    height: 25px;
    background-color: #A6DDF2;
}

</style>