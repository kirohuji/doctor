<template>
  <div class="medical-record">
    <div class="medical-record-info">
      <Label label="就诊人:" value="杨嗣昌 男 70岁" />
      <Label label="就诊时间：" value="2021/06/25 15:03" />
      <Label label="就诊科室:" value="(互)妇科门诊" />
    </div>
    <DataForm v-bind="form" />
    <div class="medical-footer">
      <Button size="small">暂存</Button>
      <Button type="primary" size="small">立即创建</Button>
    </div>
  </div>
</template>

<script>
import Label from "@/components/atoms/Label";
import { DataForm } from "lourd-components";
import config from "./config";
import { Button } from "element-ui";
export default {
  components: {
    Label,
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
  padding: 16px 0px;
}
</style>
