import Card from "@/components/atoms/Card";
import { Avatar, Link, Button } from "element-ui";
const Label = ({ props: { label, value } }) => (
  <span style="margin: 0 8px">
    <span>{label}</span>
    <span>{value}</span>
  </span>
);
const operation = [
  { label: "写病历", type: "primary", event: "medicalRecord" },
  { label: "开处方", type: "success", event: "prescription" },
  { label: "开医技", type: "success", event: "medicalTechnical" },
  { label: "过号", type: "warning", event: "skip" },
  { label: "结束会诊", type: "danger", event: "complete" },
];
// 基本信息
const BaseInfo = ({ props: { gender, age, phone, card } }) => (
  <span style="font-size: 12px">
    <Label value={gender} />
    <Label value={`${age}岁`} />
    <Label label="手机号:" value={phone} />
    <Label label="就诊卡号:" value={card} />
  </span>
);
export default ({ props: { patient }, listeners }) => (
  <Card class="chat-card-header">
    <div class="header-layout">
      <Avatar src={patient.patient_avatar_url} />
      <div class="info-layout">
        <div>
          <span class="name">{patient.patient_realname}</span>
          <BaseInfo
            gender={patient.patient_gender}
            age={patient.patient_age}
            phone={patient.patient_telephone}
            card={patient.consult_no}
          />
        </div>
        <span style="font-size: 12px;display: flex;align-items: center;justify-content: space-between;width: 450px">
          <Link
            underline={false}
          >{`${patient.rsvt_time} ${patient.sequence}号`}</Link>
          <span>{patient.is_signin ? "已签到" : "未签到"}</span>
          <span>{patient.is_online ? "在线" : "离线"}</span>
          <div>
            <Button type="text" size="small">
              历史处方
            </Button>
            <Button type="text" size="small">
              历史医技
            </Button>
          </div>
          <Label label="就诊时长:" value={patient.duration} />
        </span>
      </div>
    </div>
    <div style="margin:8px;padding-left: 48px">
      {operation.map((item, index) => (
        <Button
          key={index}
          type={item.type}
          size="small"
          onClick={() => listeners.operation(item.event)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  </Card>
);
