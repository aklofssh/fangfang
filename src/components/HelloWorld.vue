<template>
  <div class="hello">
     
      <span @click="aaa">asdasd</span>
      <router-link to="/home">点我去首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    aaa(){
      this.$store.commit('add');
    }
  }

}
</script>

