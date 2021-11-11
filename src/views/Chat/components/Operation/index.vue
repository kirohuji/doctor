<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    stretch
    style="width: 400px; height: 100%; border: 1px solid #ebeef5"
  >
    <el-tab-pane label="用户管理" name="first">院内档案</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">随访结论</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
