import Card from "@/components/atoms/Card";
import Label from "../../components/atoms/Label";
import { Avatar, Link } from "element-ui";
// 基本信息
const BaseInfo = ({ props: { gender, age } }) => (
  <span style="font-size: 13px">
    <Label value={gender} />
    <Label value={`${age}岁`} />
  </span>
);
export const PatientCard = {
  props: ["paitent"],
  render() {
    // debugger;
    return (
      <Card class="patient-card">
        <div class="avatar-info">
          <Avatar />
          <Link size="mini">取消关注</Link>
        </div>
        <div>
          <span class="name">{this.patient.patient_realname}</span>
          <BaseInfo
            {...{
              props: {
                gender: this.patient.patient_realname,
                age: this.patient.patient_realname,
              },
            }}
          />
          <div class="patient-info">
            <Label label="电话:" value={this.patient.patient_realname} />
            <Label label="关注时间:" value={this.patient.patient_realname} />
            <Label label="关注原因:" value="给患者开检验检查，等待结果" />
            <Label label="病历更新状态:" value="08/05新增病历" />
            <Label label="随访信息:" value="无新增随访结果" />
            <Label label="风险预警:" value="白细胞增多" />
          </div>
        </div>
        <i class="el-icon-setting"></i>
      </Card>
    );
  },
};
