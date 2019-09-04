<template>
    <div>
        <Scroller>
       <div id="main" ref="wrapper">
            <HeadComponent title="花花影院"/>
            <mt-navbar v-model="selected" class="tab">
                <mt-tab-item id="1"><span>全城</span><i class="iconfont">&#xe65c;</i></mt-tab-item>
                <mt-tab-item id="2"><span>品牌</span><i class="iconfont">&#xe65c;</i></mt-tab-item>
                <mt-tab-item id="3"><span>特色</span><i class="iconfont">&#xe65c;</i></mt-tab-item>
            </mt-navbar>

                <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="cinema_body">
                        <ul>
                            <li v-for="item in cinemaList" :key="item.id">
                                <div>
                                    <span>{{item.nm}}</span>
                                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                                </div>
                                <div class="address">
                                    <span>{{item.addr}}</span>
                                    <span>{{item.distance}}</span>
                                </div>
                                <!-- <div class="card">
                                    <div>小吃</div> 
                                     <div>折扣卡</div> 
                                    <div v-for="(itemcard,key) in item.tag" :key='key' v-if="num===1"></div>
                                </div> -->
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="cinema_body">
                        <ul>
                            <li v-for="item in cinemaList" :key="item.id">
                                <div>
                                    <span>{{item.nm}}</span>
                                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                                </div>
                                <div class="address">
                                    <span>{{item.addr}}</span>
                                    <span>{{item.distance}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="cinema_body">
                        <ul>
                            <li v-for="item in cinemaList" :key="item.id">
                                <div>
                                    <span>{{item.nm}}</span>
                                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                                </div>
                                <div class="address">
                                    <span>{{item.addr}}</span>
                                    <span>{{item.distance}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
       </div>
       </Scroller>
    </div>
</template>
<script>
import HeadComponent from "./subComponents/HeadComponent"
export default {
    data(){
        return {
            selected:"1",
            cinemaList:[],
            list2:[],
            prevCityId:-1
        }
    },
    mounted(){
        var cityId=this.$store.state.city.id;
        this.axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
            var msg=res.data.msg;
            if(msg==='ok'){
                this.cinemaList=res.data.data.cinemas;
                this.prevCityId=cityId;
            }
        })
    },
    components:{
        HeadComponent
    }
}
</script>

<style lang="scss" scoped>
    .tab span,i {
  color: #000;
}
.tab .is-selected span,.tab .is-selected i {
  color: #26a2ff;
}
.cinema_body {
  flex: 1;
  overflow: auto;
  height: 500px;
  ul {
    padding: 20px;
  }
  li {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 10px;
  }
  .q {
    font-size: 11px;
    color: #f03d37;
  }
  .price {
    font-size: 18px;
  }
  .address {
    font-size: 13px;
    color: #666;
    span {
      &:nth-of-type(2) {
        float: right;
      }
    }
  }
}


</style>

