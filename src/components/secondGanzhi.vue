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
             <p>{{ $t("message.ganzhi6") }}<p/>
           </div>
           <div class="content-box02"><img  @click="open5('1')" src="../assets/ganzhilaoshan/ganzhi-ditu.png"> </div>
           <div class="content-box03">
             <ul>
              <li v-for="(list,index) in only"  @click="open4('1')">
                  <p>{{list}}</p>
              </li>
              <li v-for="(list,index) in lists">
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
      dt:require('../assets/ganzhilaoshan/ganzhi-ditu1.jpg')
    }
  },
   computed: {
    only: function () {
      return [this.$t("message.ganzhi0")]
      },
    lists: function () {
      return [
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
            });
                // 百度地图API功能
    var mp = new BMap.Map("map");
    var point = new BMap.Point(120.593189,36.136978);
    var point1 = new BMap.Point(120.593189,36.136978);
    mp.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point1); // 创建标注
    mp.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    // 复杂的自定义覆盖物
    function ComplexCustomOverlay(point, text, mouseoverText) {
        this._point = point;
        this._text = text;
        this._overText = mouseoverText;
    }
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function(map) {
        this._map = map;
        var div = this._div = document.createElement("div");
        div.style.position = "absolute";
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = "#EE5D5B";
        div.style.border = "1px solid #BC3B3A";
        div.style.color = "white";
        div.style.height = "18px";
        div.style.padding = "2px";
        div.style.borderRadius = "5px";
        div.style.lineHeight = "18px";
        div.style.whiteSpace = "nowrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px"
        var span = this._span = document.createElement("span");
        div.appendChild(span);
        span.appendChild(document.createTextNode(this._text));
        var that = this;

        var arrow = this._arrow = document.createElement("div");
        arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
        arrow.style.position = "absolute";
        arrow.style.width = "11px";
        arrow.style.height = "10px";
        arrow.style.top = "22px";
        arrow.style.left = "10px";
        arrow.style.overflow = "hidden";
        div.appendChild(arrow);

        div.onmouseover = function() {
            this.style.backgroundColor = "#EE5D5B";
            this.style.borderColor = "#EE5D5B";
            this.getElementsByTagName("span")[0].innerHTML = that._overText;
            arrow.style.backgroundPosition = "0px 0px";

        }

        div.onmouseout = function() {
            this.style.backgroundColor = "#EE5D5B";
            this.style.borderColor = "#BC3B3A";
            this.getElementsByTagName("span")[0].innerHTML = that._text;
            arrow.style.backgroundPosition = "0px 0px";
        }

        mp.getPanes().labelPane.appendChild(div);

        return div;
    }
    ComplexCustomOverlay.prototype.draw = function() {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
        this._div.style.top = pixel.y - 30 + "px";
    }
    var txt = "中国·山东青岛崂山大河东客服中心",
        mouseoverTxt = txt;

    var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(120.593189,36.136978), "客服中心", mouseoverTxt);

    mp.addOverlay(myCompOverlay);

  },
  methods:{
      open5:function(val) {
        var This = this;
        this.$alert('<img style="width: 47rem;height: auto;" src="'+This.dt+'" />', "游览区地图", {
          dangerouslyUseHTMLString: true,
          closeOnClickModal:true,
          center:true
        });
      },
      open4:function(val) {
        var This = this;
        this.$alert('<div style="width: 47rem;height:30rem;border:#ccc solid 1px;font-size:12px" id="map"></div>', "地图", {
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
.video .content .content-box01 img{  position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%);width: 3rem;height: 16rem;}
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
