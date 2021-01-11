import Head from "next/head";
import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import { htmlReplacements, Anchor } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RocDev</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text"
          rel="stylesheet"
        />
      </Head>
      <div className={"font-sans"}>
        <MDXProvider components={htmlReplacements}>
          <main className="w-5/6 lg:w-3/5 mx-auto">
            <Component {...pageProps} />
          </main>
        </MDXProvider>
        <footer className="mt-8 border-t border-gray-300 p-8 text-center">
          This work is licensed under a{" "}
          <Anchor href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">
            Creative Commons Attribution-NonCommercial 4.0 International Public
            License
          </Anchor>
          .
        </footer>
      </div>
    </>
  );
}

export default MyApp;
