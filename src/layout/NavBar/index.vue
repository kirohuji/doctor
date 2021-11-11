<template>
  <div class="nav-bar">
    <div class="info-layout">
      <div style="margin: 0 16px"><Avatar :src="circleUrl" /></div>
      <OutpatientButtons />
      <RouterMenu />
    </div>
    <div class="info-layout" style="width: 400px">
      <div class="info-layout" style="width: 200px">
        <Avatar :src="doctor.avatar_url" />
        <span>{{ doctor.doctor_name }}医生</span>
        <span>在线</span>
      </div>
      <Button size="small" type="primary">刷新</Button>
      <Button size="small" type="danger">退出诊室</Button>
    </div>
  </div>
</template>

<script>
import { Avatar, Button } from "element-ui";
import OutpatientButtons from "./components/OutpatientButtons.vue";
import RouterMenu from "./components/RouterMenu.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Button,
    OutpatientButtons,
    RouterMenu,
  },
  computed: {
    ...mapState(["doctor"]),
  },
  data() {
    return {
      circleUrl: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 58px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
}
.info-layout {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
