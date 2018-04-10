<template>
  <div class="shop_hd">

    <!-- Header TopNav -->
    <HeaderTopNav></HeaderTopNav>
    <div class="clear"></div>
    <!-- Header TopNav End -->

    <!-- TopHeader Center -->
    <HeaderTopCenter></HeaderTopCenter>
    <div class="clear"></div>
    <!-- TopHeader Center End -->

    <!-- Header Menu -->
    <HeaderTopMeun></HeaderTopMeun>
    <!-- Header Menu End -->

  </div>
</template>

<script>
//把header完成封装

import HeaderTopNav from "./HeaderTopNav/index";
import HeaderTopCenter from "./HeaderTopCenter/index";
import HeaderTopMeun from "./HeaderTopMeun/index";
export default {
  components: {
    HeaderTopNav,
    HeaderTopCenter,
    HeaderTopMeun
  }
};
</script>

<style>

</style>
