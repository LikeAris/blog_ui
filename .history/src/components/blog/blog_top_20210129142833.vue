<template>
  <div>
    <div style="margin-top: 15px">
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
// 导入组件
// 导出模块
export default {
  // 模块名字
  name: "BlogTop",
  // 模块数据
  data() {
    //数据
    return {
      input3: "",
      select: "",
    };
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
.el-select .el-input {
  width: 50px;
}
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 50%;
  border-collapse: separate;
  border-spacing: 0;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
