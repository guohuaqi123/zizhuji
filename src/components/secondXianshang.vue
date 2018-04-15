<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.xianshangtitle") }}</div>
    </div>
    <div class="video">
        

         <div 
         v-for="(list,index) in lists" 
         class="huanjuan01"
         :class="{ special:zhangkai == index,no:only==index}" 
         @click="zhankaiFun(index)">
          
          
           <div class="huanjuan01-boxL">
             <img src="../assets/xianshanglaoshan/bg01.png" />
             <p>{{list.bt}}</p>
           </div>
           <div class="huanjuan01-boxR">
             <xianshangcom :message='index' :msgurl='msgurl'></xianshangcom>
           </div>
           
         </div>     
    </div>
      <div class="laoziniu"><img src="../assets/xianshanglaoshan/bimo.png"></div>
    <back></back>
  </div>
</template>

<script>
import xianshangcom from '@/components/xianshang/XianshangCom'
export default {
  name: 'HelloWorld',
  data () {
    return {           
      zhangkai:0,
      only:2,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    lists: function () {
      return [
            {
              "bt":this.$t("message.xianshang0"),
              "com":require('../assets/xianshanglaoshan/com01.png')
             },{
              "bt":this.$t("message.xianshang1"),
              "com":require('../assets/xianshanglaoshan/com02.png')                 
             },{
              "bt":this.$t("message.xianshang2"),
              "com":require('../assets/xianshanglaoshan/com02.png')                        
             }]
      }
   },
  components:{xianshangcom},
  props:['msgurl'],
  methods:{
    zhankaiFun:function(index){
          this.zhangkai = index;
    },
  },
  mounted() {
            //var params = new URLSearchParams()
            //params.append('params', "首页")
             //console.log(this.$route.query.id);
             if(this.$route.query.id){
               this.zhangkai = this.$route.query.id
             }
            var This = this;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo2{     width: 8.5rem;
    position: absolute;
    top: 50%;
    left: 24%;
    transform: translate(-100%, -50%);
     animation: huajuanL 2s;
      animation-timing-function: ease-in; 
      }
.logo2 img{width: 8.5rem; height: auto}
.huanjuan{ width: 8.5rem;
    position: absolute;
    top: 50%;
    right: 24%;
    transform: translate(100%, -50%);
    animation: huajuanR 2s;
    animation-timing-function: ease-in;
   }
.huanjuan img{width: 8.5rem; height: auto}
.video{width: 74rem;
    height: 31rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
   overflow: hidden;
   animation: vid 2s;
   animation-timing-function:cubic-bezier(0.45,0.35,0.20,0.00);
      }
.video>div{
  float: left;
}
.video .huanjuan01{
  width: 5rem;
  margin-right: 2rem;
  height: 31rem;
  position: relative;
}
.video .huanjuan01 div{
  float: left;
}

.video .huanjuan01 .huanjuan01-boxL{
 width: 5.5rem;
}
.video .huanjuan01 .huanjuan01-boxL img{
    width: 5.5rem;
    height: 31rem;
}
.video .huanjuan01 .huanjuan01-boxL>p{
  width: 1.8rem;
    font-size: 1.3rem;
    
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    -webkit-writing-mode: tb-lr;
    writing-mode: tb-lr;}
.video .huanjuan01 .huanjuan01-boxR{
 width: 0rem;
 overflow: hidden;
}
.video .special .huanjuan01-boxR .coom01{width: 50rem;
    height: 25rem;padding: 2rem}
.video .special .huanjuan01-boxR .coom01 img{    width: 36rem;
    height: 24rem;
    margin-top: 2.5rem;
    margin-left: 6rem;}



.video .no{
  margin-right: 0rem;
}
.video .huanjuan01 .bg{display: none}
.video .special .bg{display: block;width: 40rem;
    height: 25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    overflow: hidden;
     animation: huanjuanBg 2s;}
.video .special .bg img{width: 40rem;
   height: 25rem;}
.video .special{
  width: 60rem;
}
.video .special .huanjuan01-boxR{
  width: 54rem;
  height: 29rem;
  margin-top: 0.8rem;
  overflow: hidden;
  background-color:rgba(255,255,255,0.4);
  border: solid 0.2rem #fff;
  float: left;
  position: relative;
  right:  0rem;
    animation: huanjuanR 2s; 
}


.video .special .huanjuan01-boxL{
  position: relative;
  left:  0rem;
 
}



.laoziniu{width: 20rem;
    position: absolute;
    top: 79%;
    right: -9%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: laoziniu 2s;}
.laoziniu img{width: 20rem;}

.ind-box{margin: 1rem}
.ind-box>div{transform:rotate(0deg);width: 5rem;
}
.ind-box>div img{animation: inDbg 6s;
animation-iteration-count: infinite;
animation-timing-function: linear;
  width: 5rem;height: auto}
  .ind-box>div p{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #6d5e46;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .ind-box .chayou{
   position: absolute;
    top: 1rem;
    left: 5rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 0.8rem;
    text-align: center;
    background: url(../assets/gps.png) no-repeat center;
    width: 12rem;
    background-size: 76%;
    color: #fff;
  }
.box{
    height: 40px;
    background: cyan;
  }
.nav{
   line-height: 40px;
   display: inline-block;
   margin-left: 100px;
   cursor: pointer;
  }
.red{
   color: red;
  }






@keyframes laoziniu{
0%   { right:-57%; }
90% {right:-9.1%;}
95% {right:-8.9%;}
100% {right:-9%;}
}
@keyframes retreat{
0%   { top:10rem; }
90% {top:-0.01rem;}
95% {top:-0.01rem;}
100% {top:0rem;}
}
@keyframes inDbg{
0%   { transform:rotate(0deg); }
100% {transform:rotate(-360deg);}
}
@keyframes huanjuanBg{
0%   { width: 3rem; }
100% { width: 40rem;}
}
@keyframes huanjuanL{
0%   { left: 18rem; }
100% { left: 0rem;}
}
@keyframes huanjuanR{
0%   { width: 0rem; }
100% { widows: 55rem;}
}
</style>
