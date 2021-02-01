<!--博客主页-->
<template>
    <div>
        <BlogTop class="blog_top"></BlogTop>
       <BlogMid class="blog_mid"></BlogMid>
    </div>
</template>

<script>
    import BlogTop from './blog/blog_top.vue';
    // import BlogLeft from './blog/blog_left.vue';
    import BlogMid from './blog/blog_mid.vue';
    // import BlogRight from './blog/blog_right.vue';
    export default {
        name: 'BlogIndex',
        data() {
            return {
            };
        },
        methods: {
        },
        components: {
            BlogTop,
            // BlogLeft,
            BlogMid,
            // BlogRight
        },
    }
</script>
<style scoped>
    .blog_top{
        width: 100%;
        margin: auto;
        padding: 20px 0;
    }
   .blog_mid{
       width: 50%;
       margin: auto;
   }
</style>