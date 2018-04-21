<template>
  <div class="hello">
    <div class="logo">
      <div><img src="../assets/sytop_1.png"></div>
      <div><img src="../assets/sytop_2.png"></div>
      <div><img ></div>
      <div><img src="../assets/sytop_3.png"></div>
      <div><img src="../assets/sytop_4.png"></div>
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
.logo{width: 78rem;
    height: 7rem;
  position: absolute;
          left: 50%;
          transform: translate(-50%, -0%);}
.logo>div{    width: 15.6rem;
    height: 7rem;
    display: table-cell;
    text-align: center;
          }
.logo>div img{width: auto;height: 3rem;
margin-top: 2rem;
          }

</style>
