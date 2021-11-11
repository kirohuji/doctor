export default ({ props: { label, value, labelStyle, valueStyle }, data }) => (
  <span
    style={`margin: 0 8px; ${data.style}`}
    class={`base-label ${data.class}`}
  >
    <span style={labelStyle}>{label}</span>
    <span style={valueStyle}>{value}</span>
  </span>
);
