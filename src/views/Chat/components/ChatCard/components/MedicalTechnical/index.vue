<template>
  <div>
    <div>
      请选择医技项目：
      <Button size="small">检查</Button>
      <Button size="small">检验</Button>
      <Button size="small">诊疗</Button>
    </div>
    <div class="select-toolbar">
      <div>
        <ButtonGroup>
          <Button size="mini">(杨)B超室</Button>
        </ButtonGroup>
        <Button type="text">更多选择</Button>
        <Input placeholder="请输入内容" size="mini">
          <Button slot="append" size="mini">搜索</Button>
        </Input>
      </div>
      <Label key="合计:" value="120元" />
    </div>
  </div>
</template>

<script>
import { Button, ButtonGroup, Input } from "element-ui";
import Label from "@/components/atoms/Label";
export default {
  components: {
    Button,
    ButtonGroup,
    Input,
    Label,
  },
};
</script>

<style lang="scss">
.select-toolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .el-input-group {
    width: 250px;
  }
}
</style>
