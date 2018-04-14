<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>首页</p>  
     </div>
     <div class="chayou">景区地图</div>
    </div>
    <div class="video" >     
      <div class="box01"><img src="../assets/threeth/box01.png" /></div>
      <div class="box"><img src="../assets/youlan/t01.png" /></div>
      <div class="box02">
        <ul>
          <li v-for="(list,index) in lists" :class="[{no:only==index},{no:only2==index}]"><img :src="list.com" /><p>流青浏览区</p></li>
        </ul>
      </div> 
    </div>
     
    <back></back>
  </div>
</template>

<script>
export default {
  data () {
    return { 
      zhonglei:["中文","English","日本語","한국어"],          
      lists:[
            {
              "com":require('../assets/threeth/01.png')
             },{
              "com":require('../assets/threeth/02.png')                 
             },{
              "com":require('../assets/threeth/03.png')                        
             },{
              "com":require('../assets/threeth/04.png')                        
             },{
              "com":require('../assets/threeth/05.png')                        
             },{
              "com":require('../assets/threeth/06.png')                        
             },{
              "com":require('../assets/threeth/07.png')                        
             }],
      only:3,
      only2:7,
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted() {
            //var params = new URLSearchParams()
            //params.append('params', "首页")
            // console.log("data");
             var This = this;

            $.ajax({
                type: "post",
                dataType: "json",
                url: 'http://218.58.56.202:8088/admin_getSiteFragmentDetail.htm',
                data: {
                    params: This.$route.query.id,
                },
                success: function(data) {
                    console.log(data);
                    This.datas= data;
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
   background: url(../assets/threeth/bg.png) no-repeat center;background-size: 100% 100%;
      }

.video .box01{width: 74rem;height: 5rem;position: relative}
.video .box01 img{width: 15rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);}
.video .box{width: 74rem;height: 2rem;position: relative}
.video .box img{    width: 9rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);}
.video .box02{width: 74rem;height: 26rem;position: relative}
.video ul{width:70rem;height: 22rem;padding: 2rem}
.video ul li{width:16rem;height: 9rem;float: left;text-align: center;line-height: 6rem;font-size: 1rem;
position: relative;margin-right: 2rem;margin-bottom: 1rem;}
.video ul li img{width:16rem;height: 9rem;}
.video ul li p{width:16rem;height: 2rem;line-height: 2rem;text-align: center; position: absolute;bottom: 0;
font-size: 0.8rem;background: #000;color: #fff}
.video ul .no{margin-right:0;}











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
