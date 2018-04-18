<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="ind-box">
     <div>
       <img src="../assets/ind-bg.png">
       <p>{{ $t("message.index") }}</p>  
     </div>
     <div class="chayou">{{ $t("message.zhuantititle") }}</div>
    </div>
    <div class="video" >     
          <div class="box01">
            <div>{{ $t("message.zhuantititle") }}</div>
            <img src="../assets/threeth/box01.png" />      
          </div>
          <div class="box02">
            <div class="Lbox">
              <div @click="hiddenFun">{{ $t("message.laoshanimg1") }}</div>
              <div @click="hiddenFun1">{{ $t("message.laoshanimg2") }}</div>
            </div>
            <div class="Rbox">
             
                  <div class="haid" v-if="ok" >
                     <ul>
                        <el-row :gutter="20">
                        <el-col :span="6" v-for="(list,index) in data1" :class="[{no:only==index},{no:only2==index}]">
                          <router-link :to="{path:'/FourLevelPageImg',query:{id:list.id}}">
                              <img :src="msgurl.getimg+list.smallPic" /><p>{{list.title}}</p>
                          </router-link>
                        </el-col>
                        </el-row>
                      </ul>
                  </div>
                  <div class="haid" v-else>
                    <ul class="tupian">
                        <swiper :options="swiperOption" ref="mySwiper">
                          <swiper-slide v-for="(list,index) in data2"><img :src="msgurl.getimg+list.smallPic" /></swiper-slide>
                          <!-- <swiper-slide><img src="./assets/bg1.jpg" /></swiper-slide>
                          <swiper-slide><img src="./assets/bg2.jpg" /></swiper-slide>
                          <swiper-slide><img src="./assets/bg3.jpg" /></swiper-slide>-->
                          <div class="swiper-pagination"  slot="pagination"></div>
                          <div class="swiper-scrollbar"   slot="scrollbar"></div> 
                        </swiper>
                        <!-- <el-row :gutter="20">
                        <el-col :span="6" v-for="(list,index) in data2">
                          
                              <img :src="msgurl.getimg+list.smallPic" @click="open5(list.smallPic)"/><p>{{list.title}}</p>
                          
                        </el-col>
                        </el-row> -->
                    </ul>
                  </div>
                
             
            </div>
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
      // lists:[
      // ],
      data1:[],
      data2:[],
      only:2,
      msg: 'Welcome to Your Vue.js App',
      ok:true,
      swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          effect : 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
        }
      }
  },
  computed: {
    lists: function () {
      return [this.$t("message.laoshanimg1"),this.$t("message.laoshanimg2")]
      }
   },
  props:["msgurl"],
 mounted() {
            var This = this;
            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getAllList,
                data: {
                    params: This.lists[0],
                },
                success: function(data) {
                    console.log(data);
                    This.data1= data;
                }
            })
            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getAllList,
                data: {
                    params:  This.lists[1],
                },
                success: function(data) {
                    console.log(data);
                    This.data2= data;
                }
            })
  },
  methods:{
    zhankaiFun:function(index){
          this.zhangkai = index;
    },
    qiehuanFun:function(index){
          this.qiehuan = index;
    },
     open5:function(val) {
        var This = this;
        this.$alert('<img :src="msgurl.getimg+list.smallPic" />', This.lists[1], {
          dangerouslyUseHTMLString: true,
          closeOnClickModal:true,
          center:true
        });
      },
    hiddenFun:function(){    
         this.ok=true;
    },
    hiddenFun1:function(){
         this.ok=false;     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    transform: translate(-50%, -50%);
    z-index: -1}
.video .box01>div{
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    }
.video .box02{width: 74rem;height: 23rem;position: relative}
.video .box02 .Lbox{width: 4rem;height: 23rem;float: left;}
.video .box02 .Lbox>div{
  text-align: center;
  margin-left: 1rem;
  height: 10rem;
  line-height: 3rem;
  margin-bottom: 1rem;
    background: url(../assets/kuaijie-bj.png);
    background-size:100% 100% ;
    width: 3rem;
    font-size: 1.3rem;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    -webkit-writing-mode: tb-lr;
    writing-mode: tb-lr;}
.video .box02 .Rbox{width:70rem;height: 23rem;margin: 0rem 0rem;overflow: hidden;float:right}
.haid{width:67rem;height: 23rem;margin-left: 1.5rem;overflow: hidden}
.haid ul{width:67rem;height: 23rem;    padding-right: 18px;
margin-left: 9px;overflow-y: scroll;
overflow-x: hidden;}
.video ul .el-col{text-align: center;line-height: 6rem;font-size: 1rem;
position: relative;margin-bottom: 1rem;}
.video .box02 ul img{width:16rem;height: 9rem;}
.video .box02 ul p{width:16rem;height: 2rem;line-height: 2rem;text-align: center; position: absolute;bottom: 0;
left: 50%;
transform: translate(-50%, -0%);
font-size: 0.8rem;background: #000;color: #fff;font-family:"Microsoft YaHei",'微软雅黑';}


.video .box02 .tupian{height: 18rem;width: 100%; padding-top: 5rem}
.video .box02 .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: 100%;
}
.video .box02 .tupian img{width: 100%;height: auto;}



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
