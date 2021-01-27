<!--主页面-->
<template>
    <div>
        <Menu class="menu"></Menu>
        <Carousel v-show=carouselVisible class="carousel"></Carousel>
    </div>
</template>

<script>
    import Menu from "../components/menu.vue";
    import Carousel from "../components/carousel.vue";
    // 导出模块
    export default {
        name: 'Index',
        data() {
            return {
                carouselVisible:false
            }
        },
        methods: {

        },
        created() {

        },
        watch: {
            // 每当计算属性中的isShowCarousel的返回值改变时，就会触发此监听器
            isShowCarousel(val) {
                console.log(val, 'val');
                if (val){
                    this.carouselVisible = val
                }
            }
        },
        computed: {
            isShowCarousel() {
                return this.$store.state.carouselVisible
            }
        },
        components: {
            Menu,
            Carousel
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
        width: 100%;
        position: fixed; /*元素相对于页面固定*/
        overflow: auto;
        z-index: 999;   /*显示在最上方*/
    }
    .carousel{
        display: block;
    }

</style>
