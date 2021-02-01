/**
* 组件模版
**/ 

<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img
        src="../assets/image/wallhaven-1k8x11.png"
        class="image"
      />
    </el-card>
  </div>
</template>

<script>
// 导入组件
// 导出模块
export default {
  // 模块名字
  name: "Test",
  // 模块数据
  data() {
    //数据
    return {};
  },
  // 注册组件
  components: {},
  // 监听指定值，只有指定值变化，才会触发
  watch: {},
  // 里面的函数只有调用才会执行（实时计算）里面是定义的方法
  methods: {
    addFun() {},
    submitFun() {},
  },
  // 创建前状态(里面是操作)
  beforeCreate() {},
  // 创建完毕状态(里面是操作)
  created() {},
  // 挂载前状态(里面是操作)
  beforeMount() {},
  // 挂载结束状态(里面是操作)
  mounted() {},
  // 更新前状态(里面是操作)
  beforeUpdate() {},
  // 更新完成状态(里面是操作)
  updated() {},
  // 销毁前状态(里面是操作)
  beforeDestroy() {},
  // 销毁完成状态(里面是操作)
  destroyed() {},
};
</script>
// scoped 样式只在本组件使用
<style scoped>
/**
 * 导入css样式组件
 * @import "../assets/css/components/index.css";
 */
 *{
   margin: 0;
   padding: 0;
   background: wheat;
 }
 .el-card{
   width:40%;
   margin: auto;
   overflow: hidden;
 }
 .image{
    width: 100%;
    height: 100%;
    object-fit:cover;
 }
 .image:hover{
   transition: 1s;
   transform: translate(-20%,-20%);
 }
</style>
