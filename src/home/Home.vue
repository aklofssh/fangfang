<template>
   <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <AppMain></AppMain>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import AppMain from './AppMain';
import Header from './Header';


export default {
  data(){
    return{}
  },
  components:{
    Sidebar,
    Header,
    AppMain

  }

}
</script>

<style>
#header {
    background-color:rgb(156, 171, 201);
    color:white;
    text-align:center;
    padding:5px;
}
#nav {
    line-height:30px;
    background-color:#eeeeee;
    height:100vp;
    width:100px;
    float:left;
    padding:5px; 
    height:950px;
}
#section {
    width:1400px;
    float:left;
    padding:10px;
    height:100pv;
    
}

</style>
