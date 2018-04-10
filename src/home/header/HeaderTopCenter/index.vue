<template>
  <div class="shop_hd_header">
    <div class="shop_hd_header_logo">
      <h1 class="logo">
        <a href="/">
          <img src="images/logo.png" alt="ShopCZ" />
        </a>
        <span>ShopCZ</span>
      </h1>
    </div>
    <div class="shop_hd_header_search">
      <ul class="shop_hd_header_search_tab">
        <li id="search" class="current">商品</li>
        <li id="shop_search">店铺</li>
      </ul>
      <div class="clear"></div>
      <div class="search_form">
        <form method="post" action="index.php">
          <div class="search_formstyle">
            <input type="text" class="search_form_text" name="search_content" value="搜索其实很简单！" />
            <input type="submit" class="search_form_sub" name="secrch_submit" value="" title="搜索" />
          </div>
        </form>
      </div>
      <div class="clear"></div>
      <div class="search_tag">
        <a href="">李宁</a>
        <a href="">耐克</a>
        <a href="">Kappa</a>
        <a href="">双肩包</a>
        <a href="">手提包</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
