<!--博客主页-->
<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">文章</el-menu-item>
            <el-submenu index="2">
                <template slot="title">日记</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">留言板</el-menu-item>
            <el-menu-item index="4">个人小屋</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'BlogMenu',
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {},
    }
</script>
<style scoped>
    .el-menu-demo {
        background-color: rgba(13, 13, 13, 0.68);
    }
    .el-menu--horizontal>.el-menu-item {
        float: left;
        width: 25%;
        height: 60px;
        line-height: 60px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #fff;
    }
    .el-menu--horizontal>.el-submenu{
        width: 25%;
    }
</style>
<style>
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid transparent;
        color: #fff;
    }
</style>