<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="logo"><img src="../assets/logo.png"></div>
    <div class="list">
      <ul>
        <router-link to="/">
        <li v-for="(list,index) in zhonglei" 
         :class="{ yuzhong:qiehuan == index}" 
         @click="qiehuanFun(index),yuyan(index)">{{list}}</li>
       </router-link>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return { 
      zhonglei:["中文","English","日本語","한국어"], 
      qiehuan:0,
      only:3,
      only2:7,
      yy:['Chinese','English','ry','hy']
    }
  },
  mounted () { 
    //alert(sessionStorage.getItem('qiehuan'))
    if(sessionStorage.getItem('qiehuan')==null){
       //alert(sessionStorage.getItem('qiehuan'))
        this.qiehuan = 0
    }else{
        this.qiehuan = sessionStorage.getItem('qiehuan')
    }
  },
  methods:{
    qiehuanFun:function(index){
          this.qiehuan = index;
          sessionStorage.setItem('qiehuan', this.qiehuan) 
    },
    yuyan:function(index){
        this.$i18n.locale=this.yy[index];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo img{position: absolute;
          left: 50%;
          transform: translate(-50%, -0%);
          }
.list{width:32rem;height: 6rem;float: right}
.list ul{width:32rem;height: 6rem}
.list ul li{width:8rem;height: 6rem;float: left;text-align: center;line-height: 6rem;font-size: 1rem}
.list ul .yuzhong{background: url(../assets/dian.png) no-repeat center;background-size: 100% auto;color: #fff}
.logo2{     width: 8.5rem;
    position: absolute;
    top: 50%;
    left: 24%;
    transform: translate(-100%, -50%);
     animation: huajuanL 2s;
      animation-timing-function: ease-in; 
      }
.logo2 img{width: 8.5rem; height: auto}
</style>
