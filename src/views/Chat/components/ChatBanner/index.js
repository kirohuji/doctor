import { Collapse, CollapseItem, Tabs, TabPane } from "element-ui";
import ChatBanner from "./components/ChatList";
import "./style.scss";
import moment from "moment";
export default {
  data: () => ({
    collapse: {
      active: [],
    },
    tab: {
      active: "first",
    },
    date: "",
  }),
  mounted() {
    this.date = moment(new Date()).format("YYYY-MM-DD");
    this.collapse.active.push(this.date);
  },
  render() {
    return (
      <div class="chat-list">
        <Collapse vModel={this.collapse.active} class="date-collapse">
          <CollapseItem title={this.date} name={this.date}>
            <Tabs vModel={this.tab.active} stretch>
              <TabPane label="全部" name="first">
                <ChatBanner />
              </TabPane>
            </Tabs>
          </CollapseItem>
        </Collapse>
      </div>
    );
  },
};
