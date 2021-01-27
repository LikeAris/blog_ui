<!--主页面-->
<template>
    <div>
        <Menu class="menu"></Menu>
        <Photo v-show=photoVisible class="carousel"></Photo>
    </div>
</template>

<script>
    import Menu from "../components/menu.vue";
    import Photo from "./photo.vue";
    // 导出模块
    export default {
        name: 'Index',
        data() {
            return {
                photoVisible:false
            }
        },
        methods: {

        },
        created() {

        },
        watch: {
            // 每当计算属性中的isShowCarousel的返回值改变时，就会触发此监听器
            isShowPhoto(val) {
                console.log(val, 'val');
                if (val){
                    this.photoVisible = val
                }
            }
        },
        computed: {
            isShowPhoto() {
                return this.$store.state.carouselVisible
            }
        },
        components: {
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
        width: 20%;
        position: fixed; /*元素相对于页面固定*/
        overflow: auto;
        z-index: 999;   /*显示在最上方*/
    }
    .carousel{
        display: block;
    }

</style>
