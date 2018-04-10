<template>
  <div class="shop_bd_home_block clearfix">
    
    <!-- 左边 -->
    <BodyListLeft></BodyListLeft>
    <!-- 左边 End -->
    
    <!-- 中间 -->
    <BodyListCenter></BodyListCenter>
    <!-- 中间 End -->
    
    <!-- 右边商品排行 -->
    <BodyListRight></BodyListRight>
    <!-- 右边商品排行 -->
    
    <!-- 品牌展示 -->
    <div class="shop_bd_home_block_bottom">
        <ul class="">
            <li><a href=""><img src="images/354b80528d2fbeefbab33c563532517e.gif" /></a></li>
            <li><a href=""><img src="images/1d2dfbead590510046a6522551db8139.gif" /></a></li>
            <li><a href=""><img src="images/26247430b09daa1b441b46008bfb6e6e.gif" /></a></li>
            <li><a href=""><img src="images/a0ac8c6d2d3dc1470d5876923182a8e2.gif" /></a></li>
            <li><a href=""><img src="images/9c5dee77a6ecdafd9e152fed8c6a4e90.gif" /></a></li>
            <li><a href=""><img src="images/b175883eba95e793affb1b1ebbbf85a5.gif" /></a></li>
            <li><a href=""><img src="images/6e61a1c953e5bc8c5f1ffdac36862245.gif" /></a></li>
            <li><a href=""><img src="images/209abd835cd2ce2208f2dc42ba10efb4.gif" /></a></li>
        </ul>
    </div>
    <!-- 品牌展示 End -->
    
</div>
</template>

<script>
import  BodyListLeft  from './BodyListLeft'
import  BodyListCenter  from './BodyListCenter'
import  BodyListRight  from './BodyListRight'
export default {
  components : {
    BodyListLeft,
    BodyListCenter,
    BodyListRight
  }
}
</script>

<style>

</style>
