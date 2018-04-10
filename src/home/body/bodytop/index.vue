<template>
  <div class="shop_bd_top clearfix">
    <div class="shop_bd_top_left"></div>
    <BodyTopCenter></BodyTopCenter>

    <!-- 右侧 -->
    <BodyTopRight></BodyTopRight>
    <!-- 右侧 End -->
  </div>
</template>

<script>
import BodyTopCenter from "./BodyTopCenter";
import BodyTopRight from "./BodyTopRight";
export default {

  components:{
    BodyTopCenter,
    BodyTopRight
  }
};
</script>

<style>

</style>
