<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
   
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.xiangqing") }}</div>
    </div>
    <div class="video" >     
      <div class="box01">
        <img src="../assets/Four/bt-bg.png" />
        <p>{{datas.title}}</p>
      </div>
      <div class="box02">
        <div class="box02com">
          <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                
                 >
                <!--
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied" -->
         </video-player>
        </div>
      </div> 
       <div class="box03">
       
      </div> 
      
    </div>
     
    <back></back>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {        
      only:3,
      only2:7,
      datas: 'Welcome to Your Vue.js App',
      urltp:'',
      playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/webm",
            src: '',
          }],
          poster: "/static/images/author.jpg",
      }
    }
  },
  props:['msgurl'],
  mounted() {
            //var params = new URLSearchParams()
            //params.append('params', "首页")
             console.log("data");
             var This = this;

            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getSiteFragmentDetail,
                data: {
                    params: This.$route.query.id,
                },
                success: function(data) {
                    console.log(data);
                    This.datas= data[0];
                    This.urltp=This.msgurl.getimg+data[0].bigPic;
                    This.playerOptions.sources[0].src=This.msgurl.getimg+data[0].bigPic
                    //console.log(This.Numbers[This.message]);
                    //This.Nber = This.Numbers.slice(0, 12);
                    //This.pages = data.length
                }
            })
  },
  methods:{
    zhankaiFun:function(index){
          this.zhangkai = index;
    },
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
    padding: 1rem;
   overflow: hidden;
   animation: vid 2s;
   animation-timing-function:cubic-bezier(0.45,0.35,0.20,0.00);
   
      }

.video .box01{width: 74rem;height: 5rem;position: relative;
background: url(../assets/Four/bg01.png) no-repeat center;background-size: 100% 100%;
}
.video .box01 img{width: 18rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);}
.video .box01 p{width: 18rem;
text-align: center;
line-height: 3rem;color: #82705d;
    font-size: 1.2rem;
    font-weight: bold;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);}
.video .box02{width: 74rem;height: 19rem;position: relative;padding-top: 3rem;
background: url(../assets/Four/bgz.png) no-repeat center;background-size: 100% 100%;}
.video .box02 .box02com{    width: 23rem;
    height: 13rem;
    margin: 0rem 25.5rem;
    overflow: hidden;}
.video .box02 .box02com1{width: 66rem;height: 22rem;overflow: hidden;
overflow-y: scroll;overflow-x: hidden;padding-right: 18px;padding-left: 9px;font-family:"Microsoft YaHei",'微软雅黑';}
.video .box02 .box02com1 p{line-height: 1.6rem;font-size: 0.9rem}
.video .box02 .box02com1 img{width: 50%}


.video .box03{width: 74rem;height: 4rem;position: relative;
background: url(../assets/Four/bg02.png) no-repeat center;background-size: 100% 100%;}











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
