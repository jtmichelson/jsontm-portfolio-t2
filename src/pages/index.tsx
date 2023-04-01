import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason Michelson</title>
        <meta name="description" content="Jason Michelson's online portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Jason <span className={styles.pinkSpan}>Michelson</span>
          </h1>
          <div className={styles.cardRow}>
            <Link
              className={styles.card}
              href="https://www.linkedin.com/in/jasonmichelson/"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>LinkedIn Profile →</h3>
              <div className={styles.cardText}>
                Please message me on LinkedIn for job inquiries. I do not respond to unsolicited emails.
              </div>
            </Link>
            <Link
              className={styles.card}
              href="https://github.com/jtmichelson"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>GitHub →</h3>
              <div className={styles.cardText}>
                All my public projects can be found here. A mix of everything: ML, games, web services, and more.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
