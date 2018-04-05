<template>
<div>
    <el-row class="top_nav">
        <el-col :span="24">
            <div class="t-n-con">
               <div class="l-t-con fl">欢迎您：XXXX</div>
               <div class="r-t-con fr">
                    <ul>
                          <li><a href="#">我的中心</a></li>
                          <li><a href="#">我的收藏</a></li>
                          <li><a href="#">我的订单</a></li>
                          <li><a href="#">退出</a></li>
                          <li><a href="#">网站导航</a></li>
                          <li><a href="#">联系我们</a></li>	
                    </ul>
               </div>
            </div>
        </el-col>
    </el-row>

<el-row class="search-one">
  <el-col :span="8">
        <div class="search-left fl">
              <img src="../img/1.png">
        </div>
        
  </el-col>
  <el-col :span="16">
        <div class="search-right fr">
              <el-input
                placeholder="请输入内容"
                v-model="input10"
                clearable  class="input-content">
              </el-input>
              <el-button type="primary" icon="el-icon-search" class="input-search">搜索</el-button>
        </div>
        
  </el-col>
  
</el-row>


<el-row class="navigation-nav">
 
  <el-col :span="24">
      <div class="navigation-content">
          <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
  </el-col>
 
</el-row>


<el-row>
  <el-col :span="4">
      <div class="banner-lef">
         
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                  <span slot="title">分组一</span>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
</el-menu>
      </div>
  </el-col>
  <el-col :span="20">
        <div class="banner-right">
            <template>
                <el-carousel :interval="5000" arrow="always" height="500px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    
                  </el-carousel-item>
                </el-carousel>
            </template> 
        </div>
        
  </el-col>
  
</el-row>

<el-row>
  <el-col :span="24">
      <div class="bud">
          最新商品
      </div>
  </el-col>
 
</el-row>

<el-row>
  <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
  <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="6">
        <div class="find-cargo">
                <el-row>
                  <el-button type="primary" size="medium">求购版</el-button>
                </el-row>
                <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
                  <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
                  
              </el-collapse>
        </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
      <div class="bud">
          最新商品
      </div>
  </el-col>
 
</el-row>

<el-row>
  <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
  <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="3">
        <div class="">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../img/product.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
        </div>
  </el-col>
  
   <el-col :span="6">
        <div class="find-cargo">
                <el-row>
                  <el-button type="primary" size="medium">求购版</el-button>
                </el-row>
                <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
                  <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
                  
              </el-collapse>
        </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
      <div class="copyright">
          <ul class="clearfix">
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">关于我们</a></li>
	    	</ul>
        <br>
          <p>人文跳骚市场 版权所有 2018-2022 服务热线：0738-98899898 请与我们联系：server@163.com</p>
          <p>人文跳骚市场会员互动群：12312313213</p>
      </div>
  </el-col>
</el-row>
</div>
</template>

<script>


</script>

<style>

/*初始化*/
  body,div,p,ul,li{
    margin: 0;
    padding: 0;
    font:12px 宋体;
  }
  img,input{
    border: 0 none;
  }
  input{
    outline-style: none;
  }

  a{
    color:#000;
    text-decoration: none;
  }
  ul,li{
    	list-style: none;
   }

  /*顶部*/

  .fl{
  	float: left;
     }

  .fr{
	  float: right;
    }	

  .top_nav {
    height: 26px;
	  border-top: 1px solid #D8D8D8;
	  border-bottom: 1px solid #D8D8D8;
	  background: #F7F7F7;
    
  }
  .l-t-con{
    height: 26px;
    line-height: 26px;
    margin-left:240px;
  }
  .r-t-con li{
    height: 26px;
    line-height: 26px;
  }
  .r-t-con li{
    float: left;
    

  }
  .r-t-con li a{
    display: inline-block;
    height: 26px;
    padding: 0 10px;
  }
  .t-n-con,.search,.nav,.banner,.bud,.pro,.baby,.flink,.copyright{
   
    margin: 0 auto;
    
  }

/*搜索栏*/
  .search-one{
    margin-top:12px;
    height:100px;
  }
 
  .search-left{
    width:200px;
    height:84px;
    margin-left:100px;
   
  }

  .search-right{
      width: 528px;
      height: 40px;
     
      margin-top:30px;
      margin-right:100px;
  }
  .input-content{

    width: 419px;
    height: 28px;
    float: left;
   
  }
  .input-search{
    width: 99px;
	  height: 40px;
	  float: left;
  
  }

/*导航栏*/
.navigation-nav{
  height: 25px;
	
}
  .banner-right{
    height:500px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
   /* width: 200px;
    min-height: 400px;*/
  }

  .el-carousel__item h3 {
    background:url(../img/1.jpg);
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


/*最新商品*/
.bud{
	height: 34px;
	background: #EBF0F6;
	border-top: 2px solid #C3D6E4;
	/*padding-left: 22px;*/
	font-weight: 700;
	font-size: 14px;
	line-height: 34px;
	margin-bottom: 10px;
	
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height:280px;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
 

/*结束*/
.copyright{
	text-align: center;
}
.copyright ul{
	width: 690px;
	margin: 0 auto;
}
.copyright li{
	float: left;
	padding: 0 10px;
	border-right: 1px solid #ccc;
	margin-top: 15px;
}
.copyright p{
	margin: 10px 0;
}











  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #E6A23C;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>


 export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }