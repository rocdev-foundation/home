import Anchor from "./anchor";

// Find the first text node and make it the ID
const idFromChildren = (children) => {
  if (children.isArray == null || !children.isArray()) {
    children = [children];
  }
  for (let child of children) {
    if (typeof child === "string" || child instanceof String) {
      return child.toLowerCase().replace(/ /g, "-");
    }
  }
  return null;
};

const withGenericHeader = (HeaderComponent) => {
  return (props) => {
    const id = idFromChildren(props.children);
    return (
      <HeaderComponent
        id={id}
        {...props}
        className={`${props.className || ""} group mt-6 mb-4`}
      >
        {props.children}{" "}
        {id != null ? (
          <Anchor
            className={"text-opacity-0 group-hover:text-opacity-100"}
            href={`#${id}`}
          >
            &#182;{/* paragraph symbol */}
          </Anchor>
        ) : (
          ""
        )}
      </HeaderComponent>
    );
  };
};

const H1 = withGenericHeader((props) => (
  <h1 {...props} className={`${props.className} text-2xl`} />
));
const H2 = withGenericHeader((props) => (
  <h2 {...props} className={`${props.className} text-xl`} />
));
const H3 = withGenericHeader((props) => (
  <h3 {...props} className={`${props.className} text-lg`} />
));

export default {
  H1,
  H2,
  H3,
};
