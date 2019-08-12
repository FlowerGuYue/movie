<template>
  <div>
  

    <router-view/>
    <!-- 底部的tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/movie">
				<span class="mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">电影</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cinema">
				<span class="mui-icon mui-icon-location"></span>
				<span class="mui-tab-label">影院</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-contact">
				</span>
				<span class="mui-tab-label">我的</span>
			</router-link>
	  </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
	  return {
		  
	  }
  }

}
</script>

<style scoped lang="scss">
.mui-bar {
	height: 50px;
}

</style>
