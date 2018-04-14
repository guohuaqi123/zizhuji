<template>
  <div id="app">
    <div>{{msg}}</div>
      <headtop></headtop>
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
      }
        
    }
  },
  components:{headtop},
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
            if (This.msg == 18000) {
               This.$router.push({ path: '/' });
               This.msg=0;
            }
        }   
    }
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
  background: url(./assets/bj.jpg) no-repeat;
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
</style>
