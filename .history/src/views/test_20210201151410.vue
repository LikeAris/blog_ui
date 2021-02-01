/**
* 组件模版
**/ 

<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <!-- 背景图+标题 -->
      <div class="article_msg">
        <img src="../assets/image/wallhaven-g7j8mq.jpg" class="image" />
        <div class="title">
          <h3>测试标题测试标题长度</h3>
        </div>
        <div class="abstract">
          <p>这是一段超长的摘要少时诵诗书所所所所所所所所所所多多多多付过过过过撒多付所发奥多撒所大色奥多撒所...</p>
        </div>
        <div class="info">
          <span>2020-10-13</span>
          <span><p>5</p>人阅读</span>
          <span><p>1</p>人评论</span>
          <span><p>5</p>人点赞</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// 导入组件
// 导出模块
export default {
  // 模块名字
  name: "Test",
  // 模块数据
  data() {
    //数据
    return {};
  },
  // 注册组件
  components: {},
  // 监听指定值，只有指定值变化，才会触发
  watch: {},
  // 里面的函数只有调用才会执行（实时计算）里面是定义的方法
  methods: {
    addFun() {},
    submitFun() {},
  },
  // 创建前状态(里面是操作)
  beforeCreate() {},
  // 创建完毕状态(里面是操作)
  created() {},
  // 挂载前状态(里面是操作)
  beforeMount() {},
  // 挂载结束状态(里面是操作)
  mounted() {},
  // 更新前状态(里面是操作)
  beforeUpdate() {},
  // 更新完成状态(里面是操作)
  updated() {},
  // 销毁前状态(里面是操作)
  beforeDestroy() {},
  // 销毁完成状态(里面是操作)
  destroyed() {},
};
</script>
// scoped 样式只在本组件使用
<style scoped>
/**
 * 导入css样式组件
 * @import "../assets/css/components/index.css";
 */
* {
  margin: 0;
  padding: 0;
}
.el-card {
  width: 100%;
  height: 300px;
  margin: auto;
  overflow: hidden;
}
/* transition 别放hover里，放到img里，这样移入移出一样缓慢，不然只对hover移上去有缓慢效果 */
.article_msg {
  position: relative;
  transition: all 0.3s;
}
/* 图片和标题整体1.1倍 */
.article_msg:hover {
  /* 放大1.1倍 */
  transform: scale(1.1);
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 图片加模糊 */
.article_msg:hover .image {
  filter: blur(5px);
}
.article_msg > .title {
  position: absolute;
  color: aliceblue;
  top: 130px;
  left: 0;
}
.title {
  margin: auto;
  width: 80%;
  text-align: center;
}
.article_msg > .abstract{

}
</style>