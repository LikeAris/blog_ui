<!--博客主页-->
<template>
  <div>
    <blog-top class="blog_top"></blog-top>
    <div class="blog_mid">
      <blog-menu></blog-menu>
      <article class="article"></article>
      <article class="article"></article>
    </div>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
import BlogTop from "./blog/blog_top.vue";
// import BlogLeft from './blog/blog_left.vue';
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
    // BlogLeft,
    BlogMenu,
    Article,
    // BlogRight
    BlogFoot
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
.article{
  margin-top: .5rem;
}
</style>