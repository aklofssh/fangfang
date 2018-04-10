<template>
  <div class="shop_bd clearfix">
    <!-- 第一块区域  -->
    <Bodytop></Bodytop>
    <div class="clear"></div>
    <!-- 第一块区域 End -->

    <!-- 第二块区域 -->
    <BodyActivity></BodyActivity>
    <div class="clear"></div>
    <!-- 第二块区域 End -->

    <!-- 第三块区域 男女服饰 -->
    <BodyList></BodyList>
    <div clas="clear"></div>
    <!-- 第三块区域 End -->

    <!-- body的footer start -->
    <BodyFooter></BodyFooter>
     <!-- body的footer  End-->
    <div class="clear"></div>
    
  </div>
</template>

<script>
import Bodytop from "./bodytop/index";
import BodyActivity from "./bodyActivity/index";
import BodyList from "./bodyList/index";
import BodyFooter from "./bodyFooter/indev";
export default {

    components : {
      Bodytop,
      BodyActivity,
      BodyList,
      BodyFooter
  }
};
</script>

<style>

</style>
