<template>
  <div class="app">
    <top/>
    <router-view></router-view>

  </div>
</template>

<script>


import top from './components/top.vue'
import login from './components/login.vue'
import home from './components/home.vue'
import create from './components/create.vue'
import product from './components/product.vue'

export default {
  name: 'App',
  components: {
    login,
    home,
    top,
    create,
    product
  },
  data(){
    return{

    }
  },
  methods:{



  },
  mounted(){
    console.log(this)
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;   
}
.app{
  background:url(./assets/layout2bg.jpg)no-repeat;
    background-position:center;
    background-size:auto;
    max-height: 100vh;
    overflow:scroll;
    width: 100%;
}
</style>
