const Text = (props) => (
  <p {...props} className={`${props.className || ""} mt-4`} />
);

export default Text;
