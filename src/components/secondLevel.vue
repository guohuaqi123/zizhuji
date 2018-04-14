<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.changyoutitle") }}</div>
    </div>
     <div class="logo2"><img src="../assets/laozi.png"></div>
      <div class="video">
        <img src="../assets/changyoulaoshan/cybj.png">
         <ul>
            <li v-for="(list,index) in lists" :class="[{noly:onlys==index},{noly:onlys2==index},{noly:onlys3==index},{noly:onlys4==index}]"> 
              <router-link :to="{path:'/threeTu',query:{id:list.name}}"><img :src="list.com"></router-link>
            </li>
           
         </ul>
      </div>
      <div class="laoziniu"><img src="../assets/laoziniu.png"></div>
    <back></back>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists:[
            {
              "com":require('../assets/changyoulaoshan/cy-01.png'),
              'name':"游览路线"
             },{
              "com":require('../assets/changyoulaoshan/cy-02.png'),
              'name':"公共设施"                 
             },{
              "com":require('../assets/changyoulaoshan/cy-03.png'),
              'name':"直升机"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-04.png'),
              'name':"周边交通"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-05.png'),
              'name':"崂山民宿"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-06.png'),
              'name':"海滩"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-07.png'),
              'name':"内部交通"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-08.png'),
              'name':"索道"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-09.png'),
              'name':"渔家宴"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-10.png'),
              'name':"景区地图"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-11.png'),
              'name':"游船"                        
             },{
              "com":require('../assets/changyoulaoshan/cy-12.png'),
              'name':"崂山特产"                        
             }
      ],
      onlys:2,
      onlys2:5,
      onlys3:8,
      onlys4:11
    }
  },
  props:["msgurl"],
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo2{     width: 35rem;
    position: absolute;
    top: 50%;
    left: 28%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: laizi 2s
      }
.logo2 img{width: 35rem; height: auto}
.video{   width: 38rem;
    position: absolute;
    top: 50%;
    left: 65%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
      }
.video img{width: 38rem; height: auto}
.video ul{width: 30rem;position:absolute;top: 0rem;padding:2.5rem 4rem;}
.video ul li{width: 7rem;margin-right: 4.5rem;float: left}
.video ul .noly{margin-right: 0rem;}
.video ul li img{width: 7rem;}
.laoziniu{ width: 21rem;
    position: absolute;
    top: 73%;
    right: -37%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: laoziniu 2s}
.laoziniu img{width: 28rem;}

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


@keyframes laizi{
0%   { left:-5%; }
90% {left:28.1%;}
95% {left:27.9%;}
100% {left:28%;}
}
@keyframes laoziniu{
0%   { right:-57%; }
90% {right:-37.1%;}
95% {right:-36.9%;}
100% {right:-37%;}
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
</style>
