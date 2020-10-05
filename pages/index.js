import Head from "next/head";
import Link from "next/link";
import SlackInvite from "../src/SlackInvite";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RocDev</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title">
          <img src="/rocdev.svg" alt="RocDev Logo" className="jumbo-logo" />
          <p>
            As the Greater Rochester Area's largest community of tech professionals,
            we aim to share our experiences and knowledge with one another in an effort
            to support and grow  as a whole. In disciplines related to Software &
            Development such as Software Engineering, Product Management, and Quality
            Assurance; our hope is to promote the quality and profile of the Rochester
            Tech scene. Our members are made up of Contributors, Managers, Entrepreneurs,
            Students, and Teachers; all with a passion for better code.
          </p>
        </h1>

        <p className="description">
          Read the{" "}
          <Link href="/code-of-conduct">
            <a>Code of Conduct</a>
          </Link>
        </p>

        <h3>Join our Slack</h3>
        <SlackInvite />
      </main>

      <footer>
        This work is licensed under a{" "}
        <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">
          Creative Commons Attribution-NonCommercial 4.0 International Public
          License
        </a>
        .
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          // text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .jumbo-logo {
          height: 4em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
