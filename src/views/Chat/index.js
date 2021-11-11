import Operation from "./components/Operation";
import ChatCard from "./components/ChatCard";
import ChatBanner from "./components/ChatBanner";
import "./style.scss";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["patient"]),
  },
  render() {
    return (
      <div class="chat">
        {/** 左侧聊天列表 */}
        <ChatBanner />
        {/** 聊天框 */}
        {this.patient && <ChatCard patient={this.patient} />}
        <Operation />
      </div>
    );
  },
};
