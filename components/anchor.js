const Anchor = (props) => (
  <a
    {...props}
    className={`${
      props.className || ""
    } cursor-pointer hover:underline text-blue-600`}
  />
);

const NavAnchor = (props) => (
  <a
    {...props}
    className={`${
      props.className || ""
    } cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
  />
);

export default {
  Anchor,
  NavAnchor,
};
