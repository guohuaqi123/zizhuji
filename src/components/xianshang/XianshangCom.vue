<template>
    <div class="coom01">
      <div class="div2">
      <div class="div1">
          <el-row :gutter="20" v-if="message!=2" >
                  <el-col :span="12" v-for="list in datas">
                    <div @click="open5(list.bigPic)" class="daoyou">
                          <div class="strategy-list-l">
                              <img  :src="msgurl.getimg+list.smallPic"/>
                          </div>
                          
                          <div class="grid-content bg-purple">
                            <h2>{{list.title}}</h2>
                            <p>简介:{{list.summary}}</p>
                            <p>{{list.content}}</p>
                          </div>
                    </div>
                  </el-col> 
           </el-row>
           <el-row :gutter="20" v-else>
                  <el-col :span="12"  v-for="erlist in datas">
                    <div @click="open5(erlist.bigPic)" class="daoyou2">
                           <div class="strategy-list-l2">
                              <img  :src="msgurl.getimg+erlist.smallPic"/>
                          </div>
                          
                          <div class="grid-content bg-purple">
                            <h2>{{erlist.title}}</h2>
                            <p>简介:{{erlist.summary}}</p>
                            <p>{{erlist.content}}</p>
                          </div>
                    </div>
                  </el-col>                 
           </el-row>
        </div>
     </div>
     </div>
</template>

<script>
export default {
  data () {
    return { 
      jiudian:['速八酒店','365酒店','链家酒店'],
      datas:[] ,
      yuding:['线上崂山门票预定','线上崂山导游预定','线上崂山酒店预定']   
    }
  },
  props: ['message','msgurl'],
  mounted() {
           console.log(this.msgurl);
            var This = this

            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getAllList,
                data: {
                    params: "xianshang"+This.message+"",
                },
                success: function(data) {
                    console.log(data);
                    This.datas= data;
                    //console.log(This.Numbers[This.message]);
                    //This.Nber = This.Numbers.slice(0, 12);
                    //This.pages = data.length
                }
            })
  },
  methods:{
    open5:function(val) {
        var This = this;
        this.$alert('<img src="'+This.msgurl.getimg+val+'" />', This.yuding[This.message], {
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
.coom01 .div2{width: 50rem;
    height: 25rem;
    overflow: hidden}
.coom01 .div1{width: 50rem;
    height: 25rem;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 17px;}
 .el-row {
    margin-bottom: 20px;
   
  }
.el-row:last-child {
      margin-bottom: 0;
}
  .el-col {
    border-radius: 4px;
    margin-bottom: 1rem;
    position: relative;
  }
 
  .el-col .grid-content{
    width: 45%;
    position: absolute;
    top: 50%;
    right: 0rem;
    transform: translate(-0%, -50%);
    color: #000;
  }
  .el-col .grid-content h2{
   height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .el-col .grid-content p{
   /* height: 1.5rem; */
    line-height: 1.2rem;
    font-size: 0.6rem;
  }

  .el-col .grid-content2{
    width: 100%;
    position: absolute;
    bottom: 10%;
    right: -50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
  }
  .el-col .grid-content2 h2{
   height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .daoyou{
    border: solid 0.2rem #fff;
    background: #fff;
    height: 9rem;
    position: relative;
  }
.strategy-list-l {
  overflow: hidden;
    height: 9rem;
    width: 53%;
    position: relative;
    top: 50%;
    left:  0rem;
    -webkit-transform: translate(-0%, -50%);
    transform: translate(-0%, -50%);
    background: #ececec;
}

 .strategy-list-l img{
   
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

   .daoyou2{
    border: solid 0.2rem #fff;
    background: #fff;
    height: 9rem;
    position: relative;
  }
.strategy-list-l2 {
  overflow: hidden;
    height: 9rem;
    width: 53%;
    position: relative;
    top: 50%;
    left:  0rem;
    -webkit-transform: translate(-0%, -50%);
    transform: translate(-0%, -50%);
    background: #ececec;
}

 .strategy-list-l2 img{
   
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


</style>
