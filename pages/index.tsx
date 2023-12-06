import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Father } from "../components/Father/Father";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("https://img.freepik.com/vecteurs-libre/fond-rouge-noel-conception-flocons-neige-lumieres-bokeh_1048-14954.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Myriam Noel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title} style={{ color: "white" }}>
          Joyeux noel <strong className={styles.myriam}>Myriam</strong> !!!
        </h1>

        <div
          style={{
            position: "relative",
            width: 600,
            height: 400,
            margin: 50,
          }}
        >
          <Father />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: 50,
          }}
        >
          <Button href="/intro">Continue</Button>
        </div>
      </main>

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
