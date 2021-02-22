/**
* 组件模版
**/ 

<template>
  <div>
    <div class="msg">
        <el-row>
          <el-avatar shape="circle" :size="100" fit="fill" :src="url"></el-avatar>
          <p>{{username}}</p>
        </el-row>
        <el-row>
          <el-col span="8">
            <el-row>10100</el-row>
            <el-row>文章</el-row>
          </el-col>
          <el-col span="8">
            <el-row>10100</el-row>
            <el-row>文章</el-row>
          </el-col>
          <el-col span="8">
            <el-row>10100</el-row>
            <el-row>文章</el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-button circle icon="zb-iconsteam"></el-button>
          <el-button circle icon="zb-iconbilibili"></el-button>
          <el-button circle icon="zb-icongithubcolor"></el-button>
          <el-button circle icon="zb-iconqq"></el-button>
        </el-row>
    </div>
  </div>
</template>

<script>
// 导入组件
// 导出模块
export default {
  // 模块名字
  name: "Message",
  // 模块数据
  data() {
    //数据
    return {
      username:'张三',
       url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
* {
  margin: 0;
  padding: 0;
}
.msg{
  height: 380px;
  background-color:cornsilk
}

</style>