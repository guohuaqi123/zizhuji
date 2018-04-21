<template>
  <div class="hello">
     <!-- <img src="../assets/bj.jpg">  -->
    <div class="logo">    
      <div><img  class="logoImg" src="../assets/logo.gif"></div>
    </div>
    <!-- <div class="list">
       <el-dropdown trigger="click">
          <span class="el-dropdown-link qie-li">
            {{xianshi}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item  v-for="(list,index) in zhonglei" @click.native="qiehuanFun(index),yuyan(index)">
              <router-link to="/">{{list}}</router-link>
            </el-dropdown-item>
            
          </el-dropdown-menu>
        </el-dropdown>
    
    </div> -->
    
    
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
      yy:['Chinese','English','ry','hy'],
      xianshi:'中文'
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
       //alert(index)
          this.qiehuan = index;
          this.xianshi =this.zhonglei[index] ;
         
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
.logo{width: 15.6rem;height: 7rem;
  position: absolute;
          left: 50%;
          transform: translate(-50%, -0%);}
.logo>div{float: left;width: 15.6rem;height: 7rem;
          }
.logo>div .logoImg{
    width: 10.4rem;
    height: 7rem;
    margin-left: 2.6rem;
          }
.list{width: 5rem;
    margin: 2.5rem 3rem;
    height: 2rem;
    float: right;
    font-size: 1.2rem;}
/* .list .qie-li{width:32rem;height: 6rem;display: block} */
.list .qie-li{width: 6rem;
    text-align: center;
    font-size: 1rem;
    display: block;background: url(../assets/dian.png) no-repeat center;background-size: 100% auto;color: #fff}
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
