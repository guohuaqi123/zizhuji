<template>  
<div class="hello">  
    <div class="list2">
      <div @click="back">{{ $t("message.back") }}</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {     
    }
  },
  mounted() {
  },
  methods:{
    back:function(){
      this.$router.back(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list2{width: 17rem;
    height: 4rem;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -60%);}
.list2 div{width: 17rem;
height: 4rem;
line-height: 4rem;
text-align: center;
color: #fff;
background-size: 100% 100%;
background: url(../assets/retreat.png) no-repeat center; 
    background-size: 100%;
position:relative;
top: 0rem; 
animation: retreat 1s;font-size: 1.2rem}


@keyframes retreat{
0%   { top:10rem; }
90% {top:-0.01rem;}
95% {top:-0.01rem;}
100% {top:0rem;}
}
</style>
