import Head from "next/head";
import Anchor from "./anchor";
import Heading from "./heading";
import List from "./list";
import Text from "./text";

const htmlReplacements = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Text,
  a: Anchor,
  ol: List.Ordered,
  ul: List.Unordered,
};

export { htmlReplacements, Anchor, Heading, List, Text };
