<template>
    <div>
       <div id="main">
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
                            <li>
                                <div>
                                    <span>大地影院(澳东世纪店)</span>
                                    <span class="q"><span class="price">22.9</span> 元起</span>
                                </div>
                                <div class="address">
                                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                                    <span>1763.5km</span>
                                </div>
                                <div class="card">
                                    <div>小吃</div>
                                    <div>折扣卡</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    2
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    3
                </mt-tab-container-item>
            </mt-tab-container>
       </div>
    </div>
</template>
<script>
import HeadComponent from "./subComponents/HeadComponent"
export default {
    data(){
        return {
            selected:"1"
        }
    },
    components:{
        HeadComponent
    }
}
</script>

<style lang="scss" scoped>
    .tab span,i{
        color:#000;
    }
    .tab .is-selected span,.tab .is-selected i{
        color: #26a2ff;
    }
    .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 18px; line-height: 18px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>

