<template>
  <div class="hello">
     <div class="kuaijie">
       <div>
         <el-row>
            <el-col :span="24"><router-link :to="{path:'/secondRenwen',query:{id:3}}"><div class="grid-content bg-purple-dark">{{ $t("message.jingqumenpiao") }}</div></router-link></el-col>
            <el-col :span="24"><router-link :to="{path:'/secondXianshang',query:{id:1}}"><div class="grid-content bg-purple-dark">{{ $t("message.jingqudaoyou") }}</div></router-link></el-col>
            <el-col :span="24"><router-link to="/secondGanzhi" ><div class="grid-content bg-purple-dark">{{ $t("message.jingquditu") }}</div></router-link></el-col>
            <el-col :span="24"><router-link :to="{path:'/threeTu',query:{id:$t('message.jingdianxianlu')}}"><div class="grid-content bg-purple-dark">{{ $t("message.jingdianxianlu") }}</div></router-link></el-col>
            <el-col :span="24"><router-link :to="{path:'/threeTu',query:{id:$t('message.changyou9')}}"><div class="grid-content bg-purple-dark">{{ $t("message.changyou9") }}</div></router-link></el-col>
            <el-col :span="24"><router-link :to="{path:'/threeTu',query:{id:$t('message.changyou10')}}"><div class="grid-content bg-purple-dark">{{ $t("message.changyou10") }}</div></router-link></el-col>
            <el-col :span="24"><router-link :to="{path:'/threeTu',query:{id:$t('message.changyou11')}}"><div class="grid-content bg-purple-dark">{{ $t("message.changyou11") }}</div></router-link></el-col>
          </el-row>
       </div>
     </div>
   
   
    
     
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {
     
    },
  computed: {
     
    },
  methods: {
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kuaijie{ 
      position: absolute;
    top: 45%;
    left: 0%;
    transform: translate(-0%, -50%);
  width: 9rem;
    height: 23rem;
    background: url(../assets/kuaijie-bj.png);
    background-size: 100% 100%;}
.kuaijie>div{ padding-top: 3rem;
  width: 5rem;
  margin: 0 0.5rem 0 1.5rem;
    height: 20.5rem;
}
.grid-content{height: 1.8rem;line-height: 1.8rem;margin-bottom: 1rem;width: 5rem;text-align: center;
 background: url(../assets/kuaijie-bt.png);
    background-size: 100% 100%;}
</style>
