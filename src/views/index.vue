<!--主页面-->
<template>
    <div>
        <div class="top">
            <Menu></Menu>
        </div>
        <div class="left">

        </div>
        <div class="mid">

        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    import Menu from "../components/menu.vue";
    // 导出模块
    export default {
        name:'Index',
        data() {
            return {

            };
        },
        methods: {
        },
        components:{
            Menu
        }
    }
</script>
<!-- scoped 样式只在本组件使用-->
<style scoped>
    /**
     * 导入css样式组件
     * @import "../assets/css/components/index.css";
     */
    *{
        margin: 0;
        padding: 0;
    }
    .top{
        width: 100%;
        position: fixed;   /*元素相对于页面固定*/
        overflow: auto;
    }
    .left,.mid,.right{
        float: left;
        height: 1200px;
    }
    .left{
        width: 25%;
        background-color: rgba(35, 14, 46, 0.57);
    }
    .mid{
        width: 50%;
        background-color: aliceblue;
    }
    .right{
        width: 25%;
        background-color: aquamarine;
    }
</style>
