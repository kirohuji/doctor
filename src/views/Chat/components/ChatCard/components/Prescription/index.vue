<template>
  <div class="medical-record">
    <DataForm v-bind="form" />
    <div>
      <Button size="small">暂存</Button>
      <Button type="primary" size="small">立即创建</Button>
    </div>
  </div>
</template>

<script>
import { DataForm } from "lourd-components";
import config from "./config";
import { Button } from "element-ui";
export default {
  components: {
    DataForm,
    Button,
  },
  data() {
    return {
      form: {
        data: {},
        ...config.form,
      },
    };
  },
};
</script>

<style lang="scss">
.medical-record-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
