<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.ganzhititle") }}</div>
    </div>
    <div class="video">
         <img src="../assets/ganzhilaoshan/ganzhi-bg.png"> 
         <div class="content">
           <div class="content-box01">
             <img src="../assets/ganzhilaoshan/ganzhi-biaoti.png">
             <p>{{ $t("message.ganzhititle") }}<p/>
           </div>
           <div class="content-box02"><img  @click="open5('1')" src="../assets/ganzhilaoshan/ganzhi-ditu.png"> </div>
           <div class="content-box03">
             <ul>
              <li v-for="list in lists">
                 <router-link :to="{path:'/threeTu',query:{id:list}}">
                 <p>{{list}}</p></router-link>
              </li>
               <!-- <li><p>崂山十<br/>二景</p></li>
               <li><p>崂山<br/>奇石</p></li>
               <li><p>古树<br/>银花</p></li>
               <li><p>四季<br/>崂山</p></li>
               <li><p>崂山<br/>影像</p></li> -->
             </ul>
           </div>
         </div>
      </div>
     <div class="logo2"><img src="../assets/ganzhilaoshan/huajuan01.png"></div>
      <div class="huanjuan">
        <img src="../assets/ganzhilaoshan/huajuan02.png">
      </div>
      
     
      <div class="laoziniu"><img src="../assets/ganzhilaoshan/laoziyun.png"></div>
   <back></back>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dt:require('../assets/ganzhilaoshan/ganzhi-ditu.png')
    }
  },
   computed: {
    lists: function () {
      return [this.$t("message.ganzhi0"),
      this.$t("message.ganzhi1"),
      this.$t("message.ganzhi2"),
      this.$t("message.ganzhi3"),
      this.$t("message.ganzhi4"),
      this.$t("message.ganzhi5")]
      }
   },
  props:["msgurl"],
  mounted() {
           
             var This = this

            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getAllList,
                data: {
                    params: "感知崂山",
                },
                success: function(data) {
                    console.log(data);
                    //This.lists= data;
                   
                }
            })
  },
  methods:{
      open5:function(val) {
        var This = this;
        this.$alert('<img src="'+This.dt+'" />', "地图", {
          dangerouslyUseHTMLString: true,
          closeOnClickModal:true,
          center:true
        });
      }
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
.video{width: 58rem;
height: 27rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
   overflow: hidden;
   animation: vid 2s;
   animation-timing-function:cubic-bezier(0.45,0.35,0.20,0.00);
      }
.video>img{width: 58rem; height: auto}
.video .content{position:absolute;top: 0rem;padding:2.5rem 4rem;width: 50rem;height: 22rem;}
.video .content>div{float: left;}
.video .content .content-box01{ width: 5rem;height: 22rem;position: relative;}
.video .content .content-box01 img{  position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%);}
.video .content .content-box01 p{  position: absolute; top: 50%; left: 50%; 
 transform: translate(-50%, -50%);
 color: #fff;font-size: 0.8rem;
 writing-mode: vertical-lr;
    writing-mode: tb-lr;}
.video .content .content-box02{ width: 25rem;height: 22rem;position: relative;overflow: hidden}
.video .content .content-box02 img{ width: auto;
    height: 22rem; position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%);width: 25rem;}
.video .content .content-box03{ width: 20rem;height: 22rem;}
.video .content .content-box03 ul{  width: 18rem;height: 20rem;margin: 1rem}
.video .content .content-box03 ul li{  width: 9rem;height: 6rem;float: left;
background: url(../assets/ganzhilaoshan/ganzhi-listBg.png) no-repeat center;
background-size: 70%;text-align: center;color: #fff}
.video .content .content-box03 ul li p{height: 1rem;margin-top:2.5rem;font-size: 0.8rem;color: #fff}
.laoziniu{ width: 15rem;
    position: absolute;
    top: 73%;
    right: -2%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: laoziniu 2s;}
    .laoziniu img{width: 15rem;}

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


@keyframes huajuanR{
0%   { right:49%; }

100% {right:24%;}
}
@keyframes huajuanL{
0%   { left:50%; }

100% {left:24%;}
}

@keyframes vid{
0%   {width: 6rem;}
100% {width:58rem;}
}


@keyframes laoziniu{
0%   { right:-32%; }
90% {right:-2.1%;}
95% {right:-1.9%;}
100% {right:-2%;}
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
