import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../src/Landing";
import Posts from "../src/Posts";
import Footer from "../src/Footer";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sophia's Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Landing title="Sophia Bygrave's Blog"></Landing>
			<Posts></Posts>
			<Footer></Footer>
		</div>
	);
}
