import { Input, Button, Tag, Dialog, Divider, Radio } from "element-ui";
import { mapState } from "vuex";
import { consultService } from "./service";
// import { Button, Input, Dialog } from "element-ui";
const Label = ({ props: { label, value } }) => (
  <span style="margin: 0 8px">
    <span>{label}</span>
    <span>{value}</span>
  </span>
);
const NotifyDialog = {
  props: ["patient"],
  data() {
    return {
      message: "",
      notifyVisible: false,
      index: "1",
    };
  },
  methods: {
    toggle(visible) {
      this.notifyVisible = visible;
    },
  },
  render() {
    return (
      <Dialog
        visible={this.notifyVisible}
        {...{
          props: {
            customClass: "notify-dialog",
            appendToBody: true,
          },
          scopedSlots: {
            title: () => (
              <div>
                <Radio vModel={this.index} label="1" border>
                  签到提醒
                </Radio>
                <Radio vModel={this.index} label="2" border>
                  就诊提醒
                </Radio>
                <Divider />
              </div>
            ),
          },
          on: {
            "update:visible": (val) => (this.notifyVisible = val),
          },
        }}
      >
        <Input type="textarea" placeholder="请填写内容" vModel={this.message} />
        <div class="notify-buttons">
          <Button onClick={() => (this.notifyVisible = false)}>发送</Button>
        </div>
      </Dialog>
    );
  },
};
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
  methods: {
    reception() {
      consultService.reception({
        consult_id: this.patient.consult_id,
      });
    },
    notifyDialogOpen() {
      this.$refs.notifyDialog.toggle(true);
    },
  },
  render() {
    return (
      <div class="chat-card-footer">
        <NotifyDialog patient={this.patient} ref="notifyDialog" />
        <div class="message-toolbar">
          <Tag>发图片</Tag>
          <Tag>语音视频</Tag>
          <Tag>常用语</Tag>
          <Tag onClick={() => this.notifyDialogOpen()}>消息提醒</Tag>
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
              <Button
                type="primary"
                size="small"
                onClick={() => this.reception()}
              >
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
              <span class="name">{this.patient.patient_realname}</span>
              <BaseInfo
                gender={this.patient.patient_gender}
                age={this.patient.patient_age}
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
                onClick={() => this.reception()}
              >
                优先接诊
              </Button>
              <Button type="primary" size="small">
                邀请详情描述症状
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/** 回诊  */}
        {this.patient.custom_status === "end" && !this.confirm ? (
          <div class="message-control">
            <div
              style={{
                background: this.status === 2 && "rgba(243, 250, 255, 1)",
                width: "100%",
              }}
            >
              <Button
                type="primary"
                size="small"
                style="width: 120px;position: absolute; right: 0;margin: 8px;"
                onClick={() => (this.confirm = false)}
              >
                回诊
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
        {/**  提醒 */}
        {this.confirm ? (
          <div class="message-control">
            <div class="info-layout">
              <span class="name">{this.patient.patient_realname}</span>
              <BaseInfo
                gender={this.patient.patient_gender}
                age={this.patient.patient_age}
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
