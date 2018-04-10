<template>

  <div>
    <!-- Header  -wll-2013/03/24 -->
    <Header></Header>
    <div class="clear"></div>
    <!-- Header End -->

    <!-- Body -wll-2013/03/24 -->
    <Body></Body>
    <!-- Body End -->

    <!-- Footer - wll - 2013/3/24 -->
    <div class="clear"></div>
    <Footer></Footer>
    <!-- Footer End -->
  </div>

</template>

<script>
import Header from "./header";
import Body from "./body";
import Footer from "./Footer/index";
export default {

    components : {
      Header,
      Body,
      Footer
  }
};
</script>

<style scoped>

  
</style>
