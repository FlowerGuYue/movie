<template>
    <div id="main">
        <HeadComponent/>
        <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
                <span>{{ $store.state.city.nm }}</span><i class="iconfont">&#xe65c;</i>
            </router-link>
            <div class="hot_swtich">
                <router-link class="hot_item" tag="div" to="/movie/hotplay" >正在热映</router-link>
                <router-link class="hot_item" tag="div" to="/movie/willplay" >即将上映</router-link>
            </div>
            <router-link class="search_entry" tag="div" to="/movie/search" >
                <i class="iconfont">&#xe63c;</i>
            </router-link>
        </div>
        
        <keep-alive>
            <router-view/>
        </keep-alive>        
    </div>
   
</template>


<script>

import HeadComponent from "./subComponents/HeadComponent"
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            selected:true
        }
    },
    mounted(){
        setTimeout(()=>{
            this.axios.get('/api/getLocation').then((res)=>{
            var msg=res.data.msg;
            if(msg==='ok'){
                var nm=res.data.data.nm;
                var id=res.data.data.id;
                if(this.$store.state.city.id==id){return;}
                MessageBox({
                    title: '定位',
                    message:nm,
                    confirmButtonText:'切换定位',
                    showCancelButton: true
                    }).then((action)=>{
                        if(action==='confirm'){
                        window.localStorage.setItem('nowNm',nm);
                        window.localStorage.setItem('nowId',id);
                        window.location.reload();  
                    }
               
                    }).catch(err => { 
                        if (err == 'cancel') {     //取消的回调
                        MessageBox.hide();
                    } 
                });
            }
            })
        },3000);

        
    },
    components:{
        HeadComponent
    }
}
</script>

<style lang="scss" scoped>
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
    &.active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
    &.router-link-exact-active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
  }
  .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
  }
  .hot_item {
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
    &.active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
    &.router-link-exact-active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
  }
  .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
    &.active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
    &.router-link-exact-active {
      color: #509fc9;
      border-bottom: 2px #509fc9 solid;
    }
    i {
      font-size: 24px;
      color: #509fc9;
    }
  }
}

</style>

