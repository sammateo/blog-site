import styles from "../styles/Landing.module.css";
export default function Landing() {
	return (
		<div className={styles.container}>
			<img src="/pfp.jfif" className={styles.pfp}></img>
			<h1 className={styles.title}>Sophia Bygrave-Sam's Blog</h1>
		</div>
	);
}
