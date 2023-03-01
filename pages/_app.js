import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import { htmlReplacements, Anchor, Nav } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className="font-sans flex flex-col min-h-screen">
        <MDXProvider components={htmlReplacements}>
          <main className="flex-1 w-5/6 md:w-3/5 xl:w-2/5 mx-auto">
            <Component {...pageProps} />
          </main>
        </MDXProvider>
        <footer className="mt-8 border-t border-gray-300 p-8 text-center">
          <div className="w-2/5 lg:w-1/5 mx-auto">
            This work is licensed under a{" "}
            <Anchor href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">
              Creative Commons Attribution-NonCommercial 4.0 International
              Public License
            </Anchor>
            .
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
