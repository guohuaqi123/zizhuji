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
            <el-col :span="24"><div class="grid-content bg-purple-dark" @click="open5">{{ $t("message.guanwang") }}</div></el-col>
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
    open5:function(val) {
        var This = this;
        this.$alert('<div style="width: 47rem;height:30rem;"><iframe src="http://www.qdlaoshan.cn" style="width: 47rem;height:30rem;"></iframe></div>', "崂山官网", {
          dangerouslyUseHTMLString: true,
          closeOnClickModal:true,
          center:true
        });
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kuaijie{ 
      position: absolute;
    top: 41%;
    left: 0%;
    transform: translate(-0%, -50%);
  width: 9rem;
    height: 25.5rem;
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
