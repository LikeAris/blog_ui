<!--主页面-->
<template>
    <div>
        <Menu class="menu"></Menu>
        <Blog v-show = "blogVisible"></Blog>
        <Photo v-show = "photoVisible" class="carousel"></Photo>
<!--        粒子特效-->
<!--        <vue-particles-->
<!--                color="#000"-->
<!--                :particleOpacity="0.7"-->
<!--                :particlesNumber="60"-->
<!--                shapeType="circle"-->
<!--                :particleSize="4"-->
<!--                linesColor="#000"-->
<!--                :linesWidth="1"-->
<!--                :lineLinked="true"-->
<!--                :lineOpacity="0.4"-->
<!--                :linesDistance="150"-->
<!--                :moveSpeed="2"-->
<!--                :hoverEffect="true"-->
<!--                hoverMode="grab"-->
<!--                :clickEffect="true"-->
<!--                clickMode="push"-->
<!--                class="particles"-->
<!--        >-->
<!--        </vue-particles>-->
    </div>
</template>

<script>
    import Menu from "../components/menu.vue";
    import Blog from "./blog.vue";
    import Photo from "./photo.vue";
    // 导出模块
    export default {
        name: 'Index',
        data() {
            return {
                blogVisible:false,
                photoVisible:false
            }
        },
        methods: {

        },
        created() {

        },
        watch: {
            // 每当计算属性中的isShowBlog的返回值改变时，就会触发此监听器
            isShowBlog(val) {
                if (val){
                    this.blogVisible = val,
                    this.photoVisible = false
                }
            },
            isShowPhoto(val) {
                if (val){
                    this.photoVisible = val,
                    this.blogVisible = false
                }
            }
        },
        computed: {
            isShowBlog() {
                return this.$store.state.blogVisible
            },
            isShowPhoto() {
                return this.$store.state.carouselVisible
            }
        },
        components: {
            Blog,
            Menu,
            Photo
        }
    }
</script>
<!-- scoped 样式只在本组件使用-->
<style scoped>
    /**
     * 导入css样式组件
     * @import "../assets/css/components/index.css";
     */
    * {
        margin: 0;
        padding: 0;
    }

    .menu {
        width: 3%;
        position: fixed; /*元素相对于页面固定*/
        overflow: auto;
        z-index: 999;   /*显示在最上方*/
    }
    /*粒子特效样式*/
    .particles{
        width: 100%;
        height: auto;
        position: fixed;
        z-index: -1;
    }
</style>
