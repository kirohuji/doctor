<template>
  <div>
    <Badge
      style="margin: 0 8px"
      v-for="(item, index) in otpts"
      :key="index"
      :value="item.unread_msg_count"
    >
      <Button
        type="small"
        class="outpatient-button"
        :class="{ active: index == active }"
        @click="change(item, index)"
        >{{ item.name }}</Button
      >
    </Badge>
  </div>
</template>

<script>
import { Button, Badge } from "element-ui";
import { mapState } from "vuex";
export default {
  components: {
    Button,
    Badge,
  },
  data() {
    return {
      active: -1,
    };
  },
  computed: {
    ...mapState(["otpts"]),
  },
  watch: {
    /** 默认 */
    otpts(val) {
      if (val) {
        this.change(this.otpts[0], 0);
      }
    },
  },
  methods: {
    change(item, index) {
      this.active = index;
      this.$store.dispatch("changeWork", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.outpatient-button {
  padding-left: 28px;
  border-radius: 6px;
  &::after {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #008dff;
    content: "";
    position: absolute;
    left: 5%;
    top: 25%;
  }
  &.active {
    background-color: #008dff;
    color: #ffffff;
    border-color: #ffffff;
    &::after {
      background-color: #ffffff;
    }
  }
}
::v-deep .el-badge__content {
  background-color: #27c2b0;
  border: none;
}
</style>
