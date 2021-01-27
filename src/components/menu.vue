<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">剑少晨的笔记</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4" class="el-submenu-four">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2" @click="toPhoto()">
                <i class="el-icon-picture"></i>
                <span slot="title">剑少晨的照片</span>
            </el-menu-item>
            <el-menu-item index="3" >
                <i class="el-icon-aim"></i>
                <span slot="title">剑少晨的游戏</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-user"></i>
                <span slot="title">剑少晨的自我介绍</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    // 导出模块
    export default {
        // 模块名字
        name: "Menu",
        // 模块数据
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toPhoto(){
                this.$store.commit('updateCarousel');
                console.log(this.$store.state.carouselVisible);
            }
        },
        // 注册组件
        components: {},
    }
</script>
<style scoped>
    .el-menu-vertical-demo {
        background-color: rgba(0,0,0,0.55);
    }
</style>
