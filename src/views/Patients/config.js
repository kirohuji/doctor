export default {
  searcher: {
    layout: {
      use: "inline",
    },
    forms: [
      {
        label: "选择关注时间范围",
        use: "date-picker",
        type: "daterange",
        rangeSeparator: "至",
        prop: "date",
        size: "small",
      },
      {
        label: "姓名",
        use: "input",
        prop: "name",
        size: "small",
      },
    ],
  },
};
