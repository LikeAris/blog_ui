<template>
    <div>
        <el-popover
                placement="top"
                trigger="hover"
                v-model="visible"
               >
            <div style="text-align: right; margin: 0">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                         :collapse="isCollapse">
                    <el-menu-item index="1" @click="toBlog()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">剑少晨的笔记</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="toPhoto()">
                        <i class="el-icon-picture"></i>
                        <span slot="title">剑少晨的照片</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-aim"></i>
                        <span slot="title">剑少晨的游戏</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-user"></i>
                        <span slot="title">剑少晨的自我介绍</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-button icon="el-icon-position" circle slot="reference"></el-button>
        </el-popover>
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
                visible:false,
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
            toBlog() {
                this.$store.commit('updateBlogVisible');
            },
            toPhoto() {
                this.$store.commit('updateCarousel');
            }
        },
        // 注册组件
        components: {},
    }
</script>
<style scoped>
    .el-menu-vertical-demo {
        background-color: rgba(0, 0, 0, 0.55);
    }
    /deep/.el-button {
        background:rgba(0, 0, 0, 0.55) ;
        color: #FFFFFF;
        border: 0;
    }
    /deep/.el-button:hover{
        transition: 1s;
        background: rgba(5, 98, 26, 0.58);
    }
</style>
<style>
    /*
    el-popover的class也是el-popover，他比较特别的是,
    el-popover生成的div不在当前组件之内，
    甚至不在App.vue组件的div内，他和App.vue组件的div平级，
    所以需要设置全局style。
    */
    .el-popover {
        position: absolute;
        background: #FFF;
        min-width: 0px;
        border: 0px solid #EBEEF5;
        padding: 0px;
        z-index: 2000;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        word-break: break-all;
    }
    .el-popover[x-placement^=bottom] .popper__arrow{
        /*el-popover上边三角下层的颜色---也就是视觉上的边框*/
        border-bottom-color: rgba(0,0,0,.5);
    }
    .el-popover[x-placement^=bottom] .popper__arrow::after{
        /*el-popover上边三角表层的颜色---也就是视觉上的角*/
        border-bottom-color: rgba(0,0,0,.5);
    }
</style>
