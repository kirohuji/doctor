<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-container>
      <el-container>
        <AppMain />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import AppMain from "./AppMain.vue";
import NavBar from "./NavBar";
export default {
  components: {
    AppMain,
    NavBar,
  },
};
</script>

<style>
.el-header {
  padding: 0;
}
.el-aside {
  padding: 0;
}
</style>
