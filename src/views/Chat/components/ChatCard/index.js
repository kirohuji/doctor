import "./style.scss";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { BaseDialog } from "lourd-components";
import MedicalRecord from "./components/MedicalRecord";
import Prescription from "./components/Prescription";
import { consultService } from "./service";
import { Button, Input, Dialog, Popover } from "element-ui";
const CompleteType = {
  props: ["patient"],
  data() {
    return {
      exceptionVisible: false,
      popoverVisible: false,
      message: "",
    };
  },
  methods: {
    handleComplete() {
      consultService.complete({
        consult_id: this.patient.consult_id,
      });
    },
    handleException() {
      consultService.refuse({
        refuse_msg: this.message,
        consult_id: this.patient.consult_id,
      });
    },
  },
  render() {
    return (
      <div>
        <div class="complete-type-text">你是否要退出就诊?</div>
        <div class="complete-type-buttons">
          <Button type="primary" onClick={() => this.handleComplete()}>
            正常结束就诊
          </Button>
          <Button type="danger" onClick={() => (this.exceptionVisible = true)}>
            异常结束就诊
          </Button>
        </div>
        <Dialog
          visible={this.exceptionVisible}
          {...{
            props: {
              title: "异常结束",
              customClass: "exception-dialog",
              appendToBody: true,
            },
            on: {
              "update:visible": (val) => (this.exceptionVisible = val),
            },
          }}
        >
          <Input
            type="textarea"
            placeholder="请填写结束原因"
            vModel={this.message}
          />
          <div class="exception-buttons">
            <Button onClick={() => (this.exceptionVisible = false)}>
              取消
            </Button>
            <Popover vModel={this.popoverVisible}>
              <p>费用将在3个工作日内原路返回给患者，确定异常结束并退费？</p>
              <div style="text-align: right; margin: 0">
                <Button
                  size="mini"
                  type="text"
                  onClick={() => (this.popoverVisible = false)}
                >
                  取消
                </Button>
                <Button
                  type="primary"
                  size="mini"
                  onClick={() => (this.popoverVisible = false)}
                >
                  确定
                </Button>
              </div>
              <Button
                type="primary"
                slot="reference"
                trigger="click"
                placement="bottom"
              >
                结束并退费
              </Button>
            </Popover>
            <Button type="primary" onClick={() => this.handleException()}>
              结束
            </Button>
          </div>
        </Dialog>
      </div>
    );
  },
};
export default {
  props: ["patient"],
  name: "ChatCard",
  componentName: "CardBody",
  data() {
    return {
      dialog: {
        title: "写病历",
        type: "",
      },
    };
  },
  methods: {
    handleOperation(event) {
      switch (event) {
        case "medicalRecord":
          this.dialog.title = "写病历";
          this.$refs.baseDialog.open();
          this.dialog.type = event;
          break;
        case "prescription":
          this.dialog.title = "写处方";
          this.$refs.baseDialog.open();
          this.dialog.type = event;
          break;
        case "medicalTechnical":
          this.dialog.title = "开医技";
          this.$refs.baseDialog.open();
          break;
        case "skip":
          consultService.skip({
            consult_id: this.patient.consult_id,
          });
          break;
        case "complete":
          this.dialog.title = "";
          this.dialog.type = "complete";
          this.dialog.customClass = "complete-type-dialog";
          this.$refs.baseDialog.open();
      }
    },
  },
  render() {
    return (
      <div class="chat-card">
        <CardHeader
          onOperation={(event) => this.handleOperation(event)}
          patient={this.patient}
        />
        <CardBody patient={this.patient} />
        <CardFooter patient={this.patient} />
        {/**  <!-- 操作对话框--> */}
        <BaseDialog
          ref="baseDialog"
          {...{
            attrs: this.dialog,
          }}
        >
          {this.dialog.type === "medicalRecord" && <MedicalRecord />}
          {this.dialog.type === "prescription" && <Prescription />}
          {this.dialog.type === "complete" && (
            <CompleteType patient={this.patient} />
          )}
        </BaseDialog>
      </div>
    );
  },
};
