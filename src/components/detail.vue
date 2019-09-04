<template>
    <div id="detailContainer" class="slide-enter-active">
		<mt-header title="影片详情" class="head">
			<router-link to="" slot="left">
				<mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
			</router-link>
		</mt-header>
		<div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg" :style="{'background':'url('+detailMovie.albumImg+')'}"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="detailMovie.albumImg" alt="">
					</div>
					<div class="detail_list_info">
						<h2>{{detailMovie.nm}}</h2>
						<p>{{detailMovie.enm}}</p>
						<p>{{detailMovie.sc}}</p>
						<p>{{detailMovie.cat}}</p>
						<p>{{detailMovie.src}}</p>
						<p>{{detailMovie.pubDesc}}</p>
					</div>
				</div>
			</div>

			
			<div class="detail_intro">
				<p>{{detailMovie.dra}}</p>
			</div>
			<div class="detail_player swiper-container" ref="detail_player">
				<ul class="swiper-wrapper">
					<li v-for="(item,index) in detailMovie.photos" :key="index" class="swiper-slide">
						<div>
							<img :src="item | setWH('140.127')" alt="">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import HeadComponent from "./subComponents/HeadComponent"
export default {
    name:'detail',
    data(){
       return{
		   detailMovie:{}
       } 
	},
	mounted(){
		var id=this.$route.params.movieId;
        this.axios.get('/api/detailmovie?movieId='+id).then((res)=>{
			var msg=res.data.msg;
			if(msg==='ok'){
				this.detailMovie=res.data.data.detailMovie;
				this.$nextTick(()=>{
					new Swiper(this.$refs.detail_player , {
                        slidesPerView : 'auto',
                        freeMode : true,
                        freeModeSticky: true
                    });
				})
			}
		})
	},
	methods:{

	},
    components:{
        HeadComponent
    }
}
</script>


<style lang="scss" scoped>
#detailContainer {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 100;
	width: 100%;
	min-height: 100%;
	background: white;
}

#detailContainer.slide-enter-active {
	animation: .3s slideMove;
}

@keyframes slideMove {
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(0);
	}
}

.contentDetail {
	display: block;
	margin-bottom: 0;
}

.detail_list {
	height: 200px;
	width: 100%;
	position: relative;
	overflow: hidden;
}

.detail_list .detail_list_bg {
	width: 100%;
	height: 100%;
	background: 0 40%;
	filter: blur(20px);
	background-size: cover;
	position: absolute;
	left: 0;
	top: 0;
}

.detail_list .detail_list_filter {
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: #40454d;
	opacity: .55;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
}

.detail_list .detail_list_content {
	display: flex;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;
}

.detail_list .detail_list_img {
	width: 108px;
	height: 150px;
	border: solid 1px #f0f2f3;
	margin: 20px;
}

.detail_list .detail_list_img img {
	width: 100%;
	height: 100%;
}

.detail_list .detail_list_info {
	margin-top: 6px;
}

.detail_list .detail_list_info h2 {
	font-size: 20px;
	width: 200px;
	color: white;
	font-weight: normal;
	line-height: 40px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.detail_list .detail_list_info p {
	color: white;
	line-height: 20px;
	font-size: 14px;
	color: #ccc;
	margin-bottom: 3px;
}

.detail_intro {
	padding: 10px;
}

.detail_intro p {
	text-indent: 30px;
}

.detail_player {
	margin: 20px;
}

.detail_player .swiper-slide {
	width: 70px;
	margin-right: 20px;
	text-align: center;
	font-size: 14px;
}

.detail_player .swiper-slide img {
	width: 100%;
	margin-bottom: 5px;
}

.detail_player .swiper-slide p:nth-of-type(2) {
	color: #999;
}
</style>