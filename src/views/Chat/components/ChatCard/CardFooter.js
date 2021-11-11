import { Input, Button, Tag } from "element-ui";
import { mapState } from "vuex";
const Label = ({ props: { label, value } }) => (
  <span style="margin: 0 8px">
    <span>{label}</span>
    <span>{value}</span>
  </span>
);
const BaseInfo = ({ props: { gender, age, content } }) => (
  <span>
    <span style="font-size: 12px;margin: 8px">
      <Label value={gender} />
      <Label value={`${age}岁`} />
    </span>
    <div style="margin-top: 8px">{content}</div>
  </span>
);
export default {
  props: ["patient"],
  data() {
    return {
      message: "",
      status: 2,
      confirm: true,
    };
  },
  computed: {
    ...mapState(["work"]),
  },
  render() {
    return (
      <div class="chat-card-footer">
        <div class="message-toolbar">
          <Tag>发图片</Tag>
          <Tag>语音视频</Tag>
          <Tag>常用语</Tag>
          <Tag>消息提醒</Tag>
          <Tag>电话通知</Tag>
        </div>
        {/** 候诊 && 团队 */}
        {this.patient.custom_status === "wait_intalk" &&
        this.work.team_type === "team" &&
        !this.confirm ? (
          <div class="message-control">
            <div class="info-layout">
              <span class="wait_intalk">
                患者已等待15分43秒，立即接诊帮助患者解决问题
              </span>
            </div>
            <div
              style={{
                background: this.status === 2 && "rgba(243, 250, 255, 1)",
                display: "flex",
                alignItems: "center",
                width: "200px",
              }}
            >
              <Button type="primary" size="small">
                接诊
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/** 候诊 && 个人 */}
        {this.patient.custom_status === "wait_intalk" &&
        (this.work.team_type === "doctor" || this.work.team_type === "") &&
        !this.confirm ? (
          <div class="message-control">
            <div class="info-layout">
              <span class="name">詹梦琪</span>
              <BaseInfo gender="女" age="75" />
            </div>
            <div
              style={{
                background: this.status === 2 && "rgba(243, 250, 255, 1)",
                display: "flex",
                alignItems: "center",
                width: "400px",
              }}
            >
              <Button type="primary" size="small">
                优先接诊
              </Button>
              <Button type="primary" size="small">
                邀请详细描述症状
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/** 在诊  */}
        {this.patient.in_talk && !this.confirm ? (
          <div class="message-control">
            <Input
              type="textarea"
              class="message-send-input"
              placeholder="请输入内容"
              vModel={this.message}
            />
            <div
              style={{
                background: this.status === 2 && "rgba(243, 250, 255, 1)",
              }}
            >
              <Button type="primary" size="small">
                录入中
              </Button>
              <Button type="primary" style="height: calc(100% - 80px">
                发送
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.confirm ? (
          <div class="message-control">
            <div class="info-layout">
              <span class="name">詹梦琪</span>
              <BaseInfo
                gender="女"
                age="75"
                content="为避免看诊错误，切换就诊人前请先了解下患者"
              />
            </div>
            <div
              style={{
                background: this.status === 2 && "rgba(243, 250, 255, 1)",
              }}
            >
              <Button
                type="primary"
                size="small"
                style="width: 120x"
                onClick={() => (this.confirm = false)}
              >
                已了解，开始问诊
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
};
