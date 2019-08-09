<template>
    <div id="main">
       <HeadComponent title="我的影院"/>
       <Login/>
    </div>
</template>


<script>
import HeadComponent from "./subComponents/HeadComponent"
import Login from './subComponents/mine/Login'
export default {
    data(){
        return {

        }
    },
    components:{
        HeadComponent,
        Login
    }
}
</script>

<style lang="scss" scoped>
    
</style>

