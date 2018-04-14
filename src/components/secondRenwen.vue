<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.renwentitle") }}</div>
    </div>
    <div class="video">
         <div 
         v-for="(list,index) in lists" 
         class="huanjuan01"
         :class="{ special:zhangkai == index,no:only==index}" 
         @click="zhankaiFun(index)">
           <pagea :message="index" :msgurl='msgurl'></pagea>
           <div class="huanjuan01-boxL"><img src="../assets/renwenlaoshan/huajuan01.png" /></div>
           <div class="huanjuan01-boxR"><img src="../assets/renwenlaoshan/huanjuan02.png" /></div>
           <div class="bt" :class="{ nobt:zhangkai == index}">
             <img src="../assets/renwenlaoshan/wugj.png" />
             <div>{{list.bt}}</div>
           </div>
         </div>     
    </div>
                                 
    <div class="laoziniu"><img src="../assets/ganzhilaoshan/laoziyun.png"></div>
    <back></back>
  </div>
</template>

<script>
import pagea from '@/components/renwen/pagea'
export default {
  name: 'HelloWorld',
  data () {
    return {          
       zhangkai:0,
      only:3,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    lists: function () {
      return [
            {
              "bt":this.$t("message.renwen0"),
               "btt":require('../assets/renwenlaoshan/bt-01.png'),
              "dbt":""
             },{
              "bt":this.$t("message.renwen1"),
               "btt":require('../assets/renwenlaoshan/bt-02.jpg'),
              "dbt":""                  
             },{
              "bt":this.$t("message.renwen2"),
               "btt":require('../assets/renwenlaoshan/bt-03.jpg'),
              "dbt":""                       
             },{
              "bt":this.$t("message.renwen3"),
              "btt":require('../assets/renwenlaoshan/bt-04.jpg'),
              "dbt":""                    
             }]
      }
   },
  components:{pagea},
  props:['msgurl'],
  methods:{
    zhankaiFun:function(index){
          this.zhangkai = index;
    },
  },
  mounted() {
            //var params = new URLSearchParams()
            //params.append('params', "首页")
             console.log(this.msgurl);
            var This = this

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
  width: 8rem;
  margin-right: 2rem;
  height: 31rem;
  position: relative;
}
.video .huanjuan01 div{
  float: left;
}

.video .huanjuan01 .huanjuan01-boxL{
 width: 4rem;
}
.video .huanjuan01 .huanjuan01-boxL img{
     width: 4rem;
    height: 31rem;
}
.video .huanjuan01 .huanjuan01-boxR{
 width: 4rem;
}
.video .huanjuan01 .huanjuan01-boxR img{
     width: 4rem;
    height: 31rem;
}
.video .huanjuan01 .bt{
        width: 4rem;
    height: 16rem;
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.video .huanjuan01 .bt img{
        width: 4rem;
    height: 16rem;}
.video .huanjuan01 .bt>div{
        width: 2rem;
    height: 8rem;
    font-size: 1.3rem;
    /* line-height: 1rem; */
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    writing-mode: vertical-lr;
    writing-mode: tb-lr;}
.video .huanjuan01 .nobt{
  display: none
}
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
  width: 44rem;
}
.video .special .huanjuan01-boxR{
  float: right;
  position: relative;
  right:  0rem;
   animation: huanjuanR 2s;
}
.video .special .huanjuan01-boxL{
  position: relative;
  left:  0rem;
  animation: huanjuanL 2s;
}


.video .special .bg .content{position:absolute;top: 0rem;padding:1.5rem 2rem;width: 36rem;height: 21rem;}
.video .special .bg .content .content-box01{     width: 36rem;height: 4rem; position:relative}
.video .special .bg .content .content-box01 img{width: 12rem;height: 3rem;  position: absolute; 
top: 50%; left: 50%;  transform: translate(-50%, -50%);}
.video .special .bg .content .content-box01 p{  position: absolute; top: 50%; left: 50%;  
transform: translate(-50%, -50%);color: #fff;font-size: 0.8rem;width:12rem;height: 4rem;line-height: 4rem}
.video .special .bg .content .content-box02{ width: 36rem;height: 13rem;position:relative;overflow: hidden}
.video .special .bg .content .content-box02>div{float: left}
.video .special .bg .content .content-box02 .content-box02-R {width: 16rem;height: 13rem;}
.video .special .bg .content .content-box02 .content-box02-R img{width: 16rem;height: 13rem;}
.video .special .bg .content .content-box02 .content-box02-L {width: 18rem;height: 13rem;padding: 1rem}
.video .special .bg .content .content-box02 .content-box02-L h2{width: 18rem;height: 1.5rem;
line-height: 1.5rem;font-weight: bold;font-size: 0.8rem}
.video .special .bg .content .content-box02 .content-box02-L p{width: 18rem;height: 1rem;
line-height: 1rem;font-weight: bold;font-size: 0.5rem}
.video .special .bg .content .content-box03{ width: 36rem;height: 4.8rem;position:relative}
.video .special .bg .content .content-box03 ul{  width: 36rem;height: 4.8rem;padding: 0 2rem}
.video .special .bg .content .content-box03 ul li{  width: 8rem;height: 4.8rem;float: left;
background: url(../assets/ganzhilaoshan/ganzhi-listBg.png) no-repeat center;
background-size: 70%;text-align: center;color: #fff}
.video .special .bg .content .content-box03 ul li p{height: 1rem;margin-top:1.4rem;font-size: 0.8rem}
.video .special .bg .Exhibition .content-box02 .content-box02-R{width: 0rem;height: 13rem;}
.video .special .bg .Exhibition .content-box02 .content-box02-R img{width: 0rem;height: 13rem;}
.video .special .bg .Exhibition .content-box02 .content-box02-L{width: 34rem;height: 13rem;padding: 1rem}
.video .special .bg .Exhibition .content-box02 .content-box02-R img{width: 0rem;height: 13rem;}
.video .special .bg .Exhibition .content-box03 ul{width: 36rem;height: 4.8rem;padding: 0 2rem}
.video .special .bg .Exhibition .content-box03 ul li{  width: 6rem;height: 4.8rem;float: left;
background: url(../assets/ganzhilaoshan/ganzhi-listBg.png) no-repeat center;
background-size: 70%;text-align: center;color: #fff}
.video .special .bg .Exhibition2 .content-box02{width: 0rem;height: 0rem;}
.video .special .bg .Exhibition2 .content-box02 .content-box02-R{width: 0rem;height: 0rem;}
.video .special .bg .Exhibition2 .content-box02 .content-box02-R img{width: 0rem;height: 0rem;}
.video .special .bg .Exhibition2 .content-box02 .content-box02-L{width: 0rem;height: 0rem;padding: 0rem}
.video .special .bg .Exhibition2 .content-box02 .content-box02-R img{width: 0rem;height: 0rem;}
.video .special .bg .Exhibition2 .content-box03 ul{width: 32rem;height: 4.8rem;padding: 0 2rem}
.video .special .bg .Exhibition2 .content-box03 ul li{  width: 16rem;height: 4.8rem;float: left;
background: url(../assets/renwenlaoshan/renwen-bt.png) no-repeat center;
background-size: 70%;text-align: center;color: #000}


.laoziniu{width: 20rem;
    position: absolute;
    top: 79%;
    right: -9%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: laoziniu 2s;}
.laoziniu img{width: 20rem;}
.ind-box{
    margin: 1rem;
}
.ind-box>div{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    width: 5rem;
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
0%   { right: 18rem; }
100% { right: 0rem;}
}
</style>
