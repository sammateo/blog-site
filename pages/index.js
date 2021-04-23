import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../src/Landing";
import Post from "../src/Post";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing></Landing>
      <Post></Post>
    </div>
  );
}
