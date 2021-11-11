import { Avatar, Badge, Link, Collapse, CollapseItem } from "element-ui";
// import { consultService } from "../service";
import { mapState } from "vuex";
import "./style.scss";
// import _ from "lodash";
// import moment from "moment";
const Label = ({ props: { label, value } }) => (
  <span style="margin-right:4px">
    <span>{label}</span>
    <span>{value}</span>
  </span>
);
// 基本信息
const BaseInfo = ({ props: { gender, age } }) => (
  <span style="font-size: 13px">
    <Label value={gender} />
    <Label value={`${age}岁`} />
  </span>
);
const ChatItem = {
  name: "ChatItem",
  componentName: "ChatItem",
  props: [
    "patient_avatar_url",
    "patient_gender",
    "patient_age",
    "rsvt_time",
    "is_signin",
    "in_talk",
    "is_skip",
    "is_back",
    "is_online",
    "patient_realname",
    "consult_id",
    "unread_msg_count",
  ],
  components: {
    Avatar,
    Badge,
    Link,
  },
  methods: {
    selectPatient() {
      this.$store.dispatch("fetchPatient", {
        consult_id: this.consult_id,
      });
    },
  },
  render() {
    return (
      <div class="chat-item">
        {this.unread_msg_count ? (
          <Badge value={this.unread_msg_count}>
            <Avatar src={this.patient_avatar_url} />
          </Badge>
        ) : (
          <Badge>
            <Avatar src={this.patient_avatar_url} />
          </Badge>
        )}
        <div style="width: calc(100% - 72px); margin: 10px 8px;">
          <div class="chat-item-layout">
            <div style="cursor: pointer" onClick={() => this.selectPatient()}>
              <span class="name">{this.patient_realname}</span>
              <BaseInfo
                {...{
                  props: {
                    gender: this.patient_gender,
                    age: this.patient_age,
                  },
                }}
              />
            </div>
            {this.is_skip ? <Link type="primary">过号</Link> : ""}
            {this.in_talk ? <Link type="primary">在诊</Link> : ""}
            {this.is_back ? <Link type="primary">回诊</Link> : ""}
          </div>
          <div class="rsvt_time">预约时间:{this.rsvt_time}</div>
          <div class="status">
            <span>{this.is_signin ? "已签到" : "未签到"}</span>
            <span>{this.is_online ? "在线" : "不在线"}</span>
          </div>
        </div>
      </div>
    );
  },
};
export default {
  name: "ChatList",
  componentName: "ChatList",
  components: {
    Collapse,
    CollapseItem,
    ChatItem,
  },
  data() {
    return {
      collapse: {
        active: ["intalk", "wait_intalk", "end"],
      },
      chatType: new Map([
        ["intalk", "在诊"],
        ["wait_intalk", "候诊"],
        ["end", "今日已诊"],
      ]),
    };
  },
  computed: {
    ...mapState(["work", "chat"]),
  },
  render() {
    return (
      <Collapse vModel={this.collapse.active} class="chat-item-collapse">
        {Object.keys(this.chat).map((key) => (
          <CollapseItem name={key} title={this.chatType.get(key)}>
            {this.chat[key].map((item) => (
              <ChatItem
                {...{
                  props: item,
                }}
              />
            ))}
          </CollapseItem>
        ))}
      </Collapse>
    );
  },
};
