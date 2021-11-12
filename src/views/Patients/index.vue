<template>
  <div>
    <Card class="patients-header-layout">
      <DataSearchForm v-bind="searcher" />
      <Button type="primary" size="mini">添加关注</Button>
    </Card>
    <Card style="margin-top: 8px"> 风险预警 </Card>
    <div style="margin: 16px; display: flex">
      <PatientCard />
    </div>
  </div>
</template>

<script>
import { DataSearchForm } from "lourd-components";
import Card from "@/components/atoms/Card";
import config from "./config";
import { Button } from "element-ui";
import { PatientCard } from "./components";
import { patientService } from "./service";
export default {
  components: {
    DataSearchForm,
    Card,
    Button,
    PatientCard,
  },
  data() {
    return {
      searcher: {
        ...config.searcher,
        data: {
          date: [],
          name: "测试",
        },
      },
      patients: [],
    };
  },
  thenable: {
    patientData() {
      return {
        target: "patients",
        runner: patientService.find.bind(patientService),
        immediate: true,
        callback: (res) => res.data,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.patients-header-layout {
  padding: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
::v-deep .el-form-item--small.el-form-item {
  margin-bottom: 0;
}
::v-deep .patient-card {
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  .avatar-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    .el-link {
      margin-top: 8px;
      font-size: 12px;
      color: #008dff;
    }
  }
  .name {
    margin-left: 8px;
  }
  .patient-info {
    font-size: 14px;
    .base-label {
      display: block;
      font-size: 14px;
      line-height: 20px;
      span {
        color: #577799;
        &:first-child {
          color: #999999;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
