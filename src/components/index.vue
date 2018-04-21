<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
     <Shortcut></Shortcut>
      <service></service>
      <erweima></erweima>
      <Qualifications></Qualifications>
     <div class="logo2"><img src="../assets/logo2.png"></div>
      <div class="video">
        <!-- <img src="../assets/video.png"> -->
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
                    @ready="playerReadied"
                  -->
         </video-player>
      </div>
    <div class="list2">    
      <ul>
        <li ><router-link to="/secondRenwen"><p>{{ $t("message.renwentitle") }}</p></router-link></li>
        <li><router-link to="/secondLevel"><p>{{ $t("message.changyoutitle") }}</p></router-link></li>
        <li><router-link to="/secondXianshang"><p>{{ $t("message.xianshangtitle") }}</p></router-link></li>
        <li><router-link to="/secondGanzhi"><p>{{ $t("message.ganzhititle") }}</p></router-link></li>
        <li><router-link :to="{path:'/secondZhuanti',query:{id:$t('message.zhuantititle')}}"><p>{{ $t("message.zhuantititle") }}</p></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Shortcut from '@/components/Shortcut'
import service from '@/components/service'
import erweima from '@/components/erweima'
import Qualifications from '@/components/Qualifications'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
       playerOptions: {
          // videojs options
          autoplay: true,
         // muted: true,
          muted: false,
          loop: true,
          fluid: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/webm",
            src: require('../assets/img/中国崂山.webm')//"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"//require
          }],
          poster: "/static/images/author.jpg",
      }
    }
  },
  components:{'Shortcut':Shortcut,'service':service,'erweima':erweima,'Qualifications':Qualifications},
  mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo2{     width: 26rem;
    position: absolute;
    top: 50%;
    left: 30%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
      }
.logo2 img{width: 26rem; height: auto}
.video{   width: 23rem;
    position: absolute;
    top: 50%;
    left: 80%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
      }
.video>div{width: 23rem; height: 13rem}
#vjs_video_593{width: 23rem; height: 13rem}
.list2{width:96rem;height: 12rem; position: absolute;
bottom: 0;background: url(../assets/xian.png) no-repeat;background-position:0 70%;background-size: 100%;}
.list2 ul{width:50rem;height: 8rem;margin: 0 auto;}
.list2 ul li{width:8rem;height: 8rem;float: left;text-align: center;line-height: 6rem;font-size: 1.4rem;
background: url(../assets/index-tb.png) no-repeat;background-size: 100% 100%;margin-left: 1.66rem}
 .list2 ul li p{width:8rem;height: 8rem;line-height: 8rem;color: #fbd8a1;
 text-shadow:0 0 0.2em #000,
-0 -0 0.2em hsl(46, 74%, 47%);} 
</style>
