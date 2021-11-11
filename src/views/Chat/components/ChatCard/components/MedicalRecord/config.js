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
        label: "过敏史",
        use: "input",
        prop: "name",
        size: "small",
        required: true,
      },
      {
        label: "是否孕妇：",
        use: "radio-group",
        prop: "name",
        size: "small",
        required: true,
        children: () => {
          return {
            use: "radio",
            options: [
              {
                value: 1,
                label: 2,
              },
            ],
          };
        },
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
      {
        label: "患者去向",
        use: "select",
        prop: "name",
        required: true,
        children: () => {
          return {
            use: "option",
            options: [],
          };
        },
        size: "small",
      },
    ],
  },
};
