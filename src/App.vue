<template>
  <div id="app" @load="bgqiehuan">
      <headtop></headtop>
      <div class="tttt">
        <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
          <swiper-slide><img src="./assets/bj.jpg" /></swiper-slide>
          <swiper-slide><img src="./assets/bg2.jpg" /></swiper-slide>
          <swiper-slide><img src="./assets/bg3.jpg" /></swiper-slide>
          <swiper-slide><img src="./assets/bg1.jpg" /></swiper-slide>      
          <!-- Optional controls -->
        </swiper>

      </div>
      
      <transition name="fade" mode="out-in">
         <router-view v-bind:msgurl='msgurl' />
      </transition>
  </div>
</template>

<script>
import headtop from '@/components/headtop'
export default {
  name: 'App',
  data () {
    return {
      msg: 0,
      msgurl:{
        getAllList:'http://218.58.56.202:8088/admin_getAllListJson.htm',
        getSiteFragmentDetail:'http://218.58.56.202:8088/admin_getSiteFragmentDetail.htm',
        getimg:"http://218.58.56.202:8088/site/images/",
      },
      swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          effect : 'fade',
          loop:true,
          autoplay: {
            delay: 10000,
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
  components:{'headtop':headtop},
  mounted(){
    var This= this
    function addEventHandler(target,type,fn){
    if(target.addEventListener){
    target.addEventListener(type,fn);
    }else{
    target.attachEvent("on"+type,fn);
    }
    }
    function removeEventHandler(target,type,fn){
    if(target.removeEventListener){
    target.removeEventListener(type,fn);
    }else{
    target.detachEvent("on"+type,fn);
    }
    }
    var Body = $('body')[0]
    
      addEventHandler(Body,"click",jumpToLogin);
   
    function jumpToLogin() {
      This.msg=0;
      }  
     window.setInterval(go, 1000);
      function go() {
            This.msg++;
            if (This.msg == 180) {
               This.$router.push({ path: '/' });
               This.msg=0;
            }
        }   

    //  alert($('#app').css("background-image").split("\"")[1]);
     window.setInterval(qh,5000)
    //  //$('#app').css('');
    //  //$('#app').attr("background");
    //  //if(){}else()
     
     function qh(){
       // var i=0
       //alert(i<4)s
      //  var i=0
      //  $('#app').css("background-image","url("+This.ttt[2]+")");
      //  if(true){
      //    //alert(This.ttt[i])
      //    //$('#app').css("background-image","url("+This.ttt[i]+")");
      //    alert('1')
      //  }else{
      //    i==0;
      //    $('#app').css("background-image","url("+This.ttt[0]+")")
      //  }
     }

    
    },
    methods:{
      bgqiehuan:function(event){
            alert(event)
      },
    },
  }

</script>

<style>
 body {
     background: #EFEFF4;
     font-family: Hiragino Sans GB W3;
     font-size: 14px;
 }
 
 @font-face {
     font-family: HanYiChengXingJian;
     /*这里是说明调用来的字体名字*/
     src: url(./assets/HanYiChengXingJian-1.ttf);
     /*这里是字体文件路径*/
 }
#app {
  font-family:"HanYiChengXingJian", "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;width: 100%;height: 100%;
  /* background: url(./assets/bj.jpg) no-repeat; */
  background-size:100% auto
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.video-js{width: 23rem; height: 13rem}
.video-js .vjs-big-play-button{
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.el-message-box{width: 50rem}
.tttt{position: fixed;height: 100%;width: 100%;z-index: -1;}
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: 100%;
}
.tttt img{width: 100%;height: auto;}

.el-message-box{background: url(./assets/alert.png);background-size: 100% 100%;border-radius:none;
border: none;}
</style>
