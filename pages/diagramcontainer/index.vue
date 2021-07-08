<template>
  <div id="demo">
    <div class="diagram-container">
			<diagram-operate/>
      <view-sidebar>view sidebar</view-sidebar>
    </div>
  </div>
</template>

<script>
import DiagramOperate from '@/components/DiagramOperate.vue'
import ViewSidebar from '@/components/ViewSidebar.vue'

export default {
	layout: "dashboard",
  name: 'Test',
  components:{
    DiagramOperate,
    ViewSidebar,
  },
  data () {
    return {

    }
  },
  mounted(){
    
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '~assets/common.scss';

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.diagram-container{
  //@include box-border;
  @include percentage-fill(100%,90%);

  display: flex;
  padding: 5px 0px;
}

#demo{
  @include percentage-fill;
}

.title-icon{
    @include title-icon;
    border-radius:25px;
    background-image: url("~assets/icons/血缘.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:70%;
    
    margin-right: 15px;
    box-shadow: 0px 0px 2px 2px rgba($color: #8b8b8b, $alpha: 0.1);

}
</style>
