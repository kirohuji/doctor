export default {
  form: {
    layout: {
      use: "inline",
      direction: "column",
    },
    forms: [
      {
        label: "主诉",
        use: "input",
        prop: "name",
        size: "small",
        required: true,
      },
      {
        label: "过往史",
        use: "input",
        prop: "name",
        size: "small",
        required: true,
      },
      {
        label: "现病史",
        use: "input",
        prop: "name",
        size: "small",
        required: true,
      },
      {
        label: "过敏史",
        use: "input",
        prop: "name",
        size: "small",
        required: true,
      },
      {
        label: "诊断",
        use: "input",
        prop: "name",
        type: "textarea",
        size: "small",
        required: true,
      },
      {
        label: "处理",
        use: "input",
        prop: "name",
        type: "textarea",
        size: "small",
        required: true,
      },
    ],
  },
};
