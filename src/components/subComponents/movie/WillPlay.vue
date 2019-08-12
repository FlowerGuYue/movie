<template>
    
    <div class="movie_body">
        <Scroller>
        <ul>
            <li v-for="item in list" :key="item.id">
                <div class="pic_show" @tap="handleToDetail(item.id)">
                    <img :src="item.img|setWH('120.180')" >
                </div>
                <div class="info_list">
                    <h2 @tap="handleToDetail(item.id)">
                        {{item.nm}}
                        <img src="../../../assets/imax.png" v-if="item.version"/>
                    </h2>
                    <p><span class="person">{{item.wish}}</span> 人想看</p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.rt}}上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            
        </ul>
        </Scroller>
    </div>
    
</template>

<script>
export default {
    name:"WillPlay",
    data(){
        return{
            list:[],
            prevCityId:-1
        }
    },
    mounted(){
        var cityId=this.$store.state.city.id;
        if(this.prevCityId==cityId){return;}
        this.axios.get('/api/movieComingList?cityId='+cityId).then((res)=>{
            var msg=res.data.msg;
            if(msg==="ok"){
               
                this.list = res.data.data.comingList;
                //  console.log(this.list);
                this.prevCityId=cityId;
            }
        })
    },
    methods:{
        handleToDetail(movieId){
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
            .btn_pre{ 
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
