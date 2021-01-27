<!--主页面-->
<template>
    <div>
        <Carousel></Carousel>
    </div>
</template>

<script>
    import Carousel from "../components/carousel.vue";
    // 导出模块
    export default {
        name:'Photo',
        data() {
            return {
            };
        },
        watch: {
        },
        computed: {
        },
        methods: {
        },
        components:{
            Carousel
        }
    }
</script>
<!-- scoped 样式只在本组件使用-->
<style scoped>

</style>
