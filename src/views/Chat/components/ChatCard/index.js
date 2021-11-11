import "./style.scss";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { BaseDialog } from "lourd-components";
import MedicalRecord from "./components/MedicalRecord";
import Prescription from "./components/Prescription";
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
        </BaseDialog>
      </div>
    );
  },
};
