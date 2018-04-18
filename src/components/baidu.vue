<template>
  <div class="box" style="width:100%;height:100%; position: fixed">
    <div class="btn">
      <el-row>
        <el-button type="primary" plain @click="back">上页</el-button><br/><br/>
        <router-link to='/'><el-button type="primary" plain>退出</el-button></router-link>
      </el-row>
    </div>
    <iframe src="https://map.baidu.com/" style="width:100%;height:100%;"></iframe></div>
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
     back:function(){
      this.$router.back(-1)
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div{width:100%;height:100%; position: fixed}
.btn{ position: fixed; top:45%;right: 0;padding: 1rem;}
.btn span{font-size: 2rem}
</style>
