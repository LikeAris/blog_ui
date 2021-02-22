<!--博客主页-->
<template>
  <div>
    <blog-top class="blog_top"></blog-top>
    <el-row>
      <el-col span="6">
        <Message class="message"></Message>
      </el-col>
      <el-col span="10" class="blog_mid">
        <blog-menu></blog-menu>
        <Article class="article"></Article>
        <Article class="article"></Article>
      </el-col>
      <el-col span="6">
       
      </el-col>
    </el-row>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
import BlogTop from "./blog/blog_top.vue";
// 左侧信息栏
import Message from "./blog/message.vue";
//导航栏
import BlogMenu from "./blog/blog_menu.vue";
import Article from "./blog/article.vue";
// import BlogRight from './blog/blog_right.vue';
import BlogFoot from "./blog/blog_foot.vue";

export default {
  name: "BlogIndex",
  data() {
    return {};
  },
  methods: {},
  components: {
    BlogTop,
    Message,
    BlogMenu,
    Article,
    // BlogRight
    BlogFoot,
  },
};
</script>
<style scoped>
.blog_top {
  width: 100%;
  margin: auto;
  padding: 20px 0;
  background-color: rgba(105, 105, 105, 0.5);
}
.blog_mid {
  width: 50%;
  margin: auto;
}
.article {
  margin-top: 0.5rem;
}
.message{
  width: 75%;
  border-radius: 10px;
}
</style>