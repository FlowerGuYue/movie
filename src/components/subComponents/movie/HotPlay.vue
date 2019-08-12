<template>
    <div class="movie_body" ref="movie_body">
        <Scroller>
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic_show" @tap="handToDetail(item.id)"><img :src="item.img|setWH('128.180')"></div>
                <div class="info_list">
                    <h2 @tap="handToDetail(item.id)">
                        {{item.nm}}
                        <img src="../../../assets/imax.png" v-if="item.version"/>
                    </h2>
                    <p>观众评 <span class="grade">{{item.sc}}</span></p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>    
        </ul>
        </Scroller>
    </div>

</template>

<script>


export default {
    name:'HotPlay',
    data(){
        return {
            movieList:[],
            // 上一个城市的id
            prevCityId:-1
        }
    },
    activated(){
        var cityId=this.$store.state.city.id;
        console.log(cityId);
        if(this.prevCityId==cityId){return;}
        this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
            // console.log(res);
            var msg=res.data.msg;
            if(msg==="ok"){
                this.movieList=res.data.data.movieList;
                this.prevCityId=cityId;
            }
        })
    },
    methods:{
        handToDetail(movieId){
            console.log(movieId);
            this.$router.push("/movie/detail/"+movieId);
        }
    }
}
</script>

<style scoped lang="scss">
.movie_body{ 
    flex:1; 
    overflow:auto;
    height: 550px;
    ul{ 
        margin:0 12px; 
        overflow: hidden;
        li{ 
            margin-top:12px; 
            display: flex; 
            align-items:center; 
            border-bottom: 1px #e6e6e6 solid; 
            padding-bottom: 10px;
            .pic_show{ 
                width:85px; 
                height:120px;
                img{ 
                    width:100%;
                    height:120px;
                }
                
            }
            .info_list { 
                margin-left: 10px; 
                flex:1; 
                position: relative;
                h2{ 
                    font-size: 17px; 
                    line-height: 24px; 
                    width:150px; 
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow:ellipsis;
                }
                p{ 
                    font-size: 13px; 
                    color:#666; 
                    line-height: 22px; 
                    width:200px; 
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow:ellipsis;
                }
                .grade{ 
                    font-weight: 700; 
                    color: #faaf00; 
                    font-size: 15px;
                }
                img{ 
                    width:50px; 
                    position: absolute; 
                    right:10px; 
                    top: 5px;
                }
            }
            .btn_mall{ 
                width:47px; 
                height:27px; 
                line-height: 28px; 
                text-align: center; 
                background-color: #f03d37; 
                color: #fff; 
                border-radius: 4px; 
                font-size: 12px; 
                cursor: pointer;
            }
        }
            
    }
}
</style>
