<template>
	<div id="diagram-operate">
		<tool-bar :is-full-screen="isFullScreen"></tool-bar>
		<diagram ref="diagram1"></diagram>
	</div>
</template>

<script>
import Diagram from "./diagram.vue";
import ToolBar from "./Toolbar.vue";
export default {
	name: "Test",
	components: {
		Diagram,
		ToolBar,
	},
	data() {
		return {
			isFullScreen: false,
		};
	},

	computed: {
		myDiagram: function () {
      console.log('myDiagram')
			return this.$refs.demo3.myDiagram;
		},
	},
	mounted() {},
	methods: {
		testGetNewData() {
      console.log('testGetNewData')
			this.$refs.demo3.getNewData();
		},

		canvasFullScreen() {
      console.log('canvasFullScreen')
			this.launchFullScreen();
		},

		//进入全屏
		launchFullScreen() {
      console.log('launchFullScreen')
			let element = document.getElementById("diagram-operate");

			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}

			this.isFullScreen = !this.isFullScreen;
		},

		exitFullscreen() {
      console.log('exitFullscreen')
			let element = document.getElementById("diagram-operate");

			if (element.exitFullscreen) {
				element.exitFullscreen();
			} else if (element.mozExitFullScreen) {
				element.mozExitFullScreen();
			} else if (element.webkitExitFullscreen) {
				element.webkitExitFullscreen();
			}

			this.isFullScreen = !this.isFullScreen;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/common.scss";

h1,
h2 {
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

#diagram-operate {
	//@include box-border;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	margin-right: 5px;

	padding: 5px;
}
</style>
