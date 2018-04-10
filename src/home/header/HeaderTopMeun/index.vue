<template>
  <div class="shop_hd_menu">
    <!-- 所有商品菜单 -->
    <div class="shop_hd_menu_all_category shop_hd_menu_hover">
      <!-- 首页去掉 id="shop_hd_menu_all_category" 加上clsss shop_hd_menu_hover -->
      <HeaderMeunCategory></HeaderMeunCategory>
      <HeaderMeunOption></HeaderMeunOption>
    </div>
    <!-- 所有商品菜单 END -->

    <!-- 普通导航菜单 -->
      <HeaderMeunNav></HeaderMeunNav>
    <!-- 普通导航菜单 End -->
  </div>
</template>

<script>
import  HeaderMeunCategory  from './HeaderMeunCategory';
import  HeaderMeunOption  from './HeaderMeunOption';
import  HeaderMeunNav  from './HeaderMeunNav';
export default {
  components : {
    HeaderMeunCategory,
    HeaderMeunOption,
    HeaderMeunNav
  }
}
</script>

<style>

</style>
