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
  render() {
    return (
      <Card class="patient-card">
        <div class="avatar-info">
          <Avatar />
          <Link size="mini">取消关注</Link>
        </div>
        <div>
          <span class="name">詹梦琪</span>
          <BaseInfo
            {...{
              props: {
                gender: "女",
                age: "75",
              },
            }}
          />
          <div class="patient-info">
            <Label label="电话:" value="13177778888" />
            <Label label="关注时间:" value="2021-05-09" />
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
