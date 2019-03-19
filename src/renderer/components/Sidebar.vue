<template>
	<div class="sideNav">

			<!-- 天计划 -->
			<router-link to="/dayplan/index">
				<span>
					<Icon type="ios-alarm-outline"></Icon>
				</span>
			</router-link>

			<!-- 周计划 待考虑 -->
			<!-- 
			<router-link to="/weekplan/index">
				<span>
					<Icon type="ios-timer"></Icon>
				</span>
			</router-link> 
			-->

			<!-- 月计划 -->
			<router-link to="/monthplan/index">
				<span>
					<Icon type="ios-calendar-outline"></Icon>
				</span>
			</router-link>
			
			<!-- 计划分解 -->
			<router-link to="/plandecomposition/index">
				<span>
					<Icon type="network"></Icon>
				</span>
			</router-link>
    </div>
</template>
<script>
/* eslint-disable */
import path from 'path'

export default {
	data () {
		return {

		}
	},
	methods: {
		resolvePath(routePath) {
      // if (this.isExternalLink(routePath)) {
      //   return routePath
			// }
			console.log('1123335')
      // return path.resolve(this.basePath, routePath)
    }
	}
}
</script>
<style>
.sideNav {
	width: 60px;
	height: 100vh;
	float: left;
	background-color: #333333;
}
.sideNav span {
	text-align: center;
	display: block;
	margin-top: 20px;
}
.sideNav span i{
	color: #aaaaaa;
	font-size: 36px;
}
</style>