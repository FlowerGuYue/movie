<template>
<div>
    <header id="header">
        <slot></slot> <h1>{{title}}</h1>
	</header>
</div>
    
</template>

<script>
export default {
   name:"HeadComponent",
   props:{
     title:{
       type:String,
       default:"花花电影"
     }
   }
}
</script>

<style scoped lang="scss">
#header{
    width:100%; 
    height:50px; 
    color: #fff; 
    background: #007aff; 
    border-bottom: 1px solid #007aff; 
    position: relative;
    h1{ 
      font-size: 18px; 
      text-align: center; 
      line-height: 50px; 
      font-weight: normal; 
      padding:0 !important;
    }
    i{ 
      position: absolute; 
      left: 5px; top: 50%; 
      margin-top: -13px; 
      font-size: 26px;
      }
  }

</style>
