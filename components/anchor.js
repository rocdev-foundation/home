const Anchor = (props) => (
  <a
    {...props}
    className={`${
      props.className || ""
    } cursor-pointer hover:underline text-blue-600`}
  />
);



export default Anchor;
