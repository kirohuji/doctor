import Card from "@/components/atoms/Card";
import Label from "@/components/atoms/Label";
import { Avatar, Link } from "element-ui";
import { imService } from "./service";
const DescriptionContent = {
  props: ["photos"],
  render() {
    return (
      <div style="display:flex;width:100%;justify-content: space-between;align-items: flex-start;">
        <div>
          {this.photos.map((item) => (
            <Avatar shape="square" src={item.photo_url} />
          ))}
        </div>
        <Link>详细描述</Link>
      </div>
    );
  },
};
const DescriptionCard = {
  props: ["patient"],
  render() {
    return (
      <Card style="padding: 16px;border-radius: 16px">
        <Label label="预约内容：" value={this.patient.patient_desc} />
        <Label
          label="图片："
          labelStyle="width: 60px"
          style="display: flex;margin-top:8px"
          valueStyle="width:100%"
          value={<DescriptionContent photos={this.patient.photos} />}
        />
      </Card>
    );
  },
};
const ChatMessage = ({ props: { msg, msg_type, msg_to } }) => (
  <li class={`infinite-chat-list-item`}>
    <div class={`chat-message-body-main ${msg_to}`}>
      <Avatar />
      <div>
        <Card class="chat-message">
          {msg_type === "text" && msg}
          {msg_type === "img" && (
            <img src={msg} style="width: 200px;height:200px" />
          )}
        </Card>
        <Link style="margin: 8px 16px">已读</Link>
      </div>
    </div>
  </li>
);
const ChatStream = {
  name: "ChatStream",
  props: ["patient"],
  thenable: {
    chatHistory() {
      return {
        runner: imService.history.bind(imService),
        variables: function () {
          return {
            patient_id: this.patient.patient_id,
            page: this.page,
            size: this.size,
          };
        },
        callback: function (res) {
          // debugger
          this.history.push(...res);
          this.$forceUpdate();
        },
        immediate: true,
      };
    },
  },
  data() {
    return {
      history: [],
      page: 1,
      size: 10,
    };
  },
  methods: {
    load() {
      this.page++;
      this.chatHistory.refresh();
    },
  },
  render() {
    return (
      <ul
        class="infinite-chat-list"
        v-infinite-scroll={() => this.load()}
        style="overflow:auto"
      >
        {this.history.map((item) => (
          <ChatMessage
            {...{
              props: item,
            }}
          />
        ))}
      </ul>
    );
  },
};
export default {
  props: ["patient"],
  render() {
    return (
      <div class="chat-card-body">
        {this.patient.patient_desc && (
          <DescriptionCard patient={this.patient} />
        )}
        <ChatStream patient={this.patient} />
      </div>
    );
  },
};
