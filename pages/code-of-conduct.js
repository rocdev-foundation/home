import Head from "next/head";
import Coc from "./code-of-conduct/coc.mdx";

export default function CodeOfConduct() {
  return (
    <>
      <Head>
        <title>RocDev Code of Conduct</title>
      </Head>
      <Coc />
    </>
  );
}
