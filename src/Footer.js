import styles from "../styles/Footer.module.css";
export default function Footer() {
	const name = "Sophia Bygrave-Sam";
	const description = [
		"Author",
		"Trainer",
		"Motivational Speaker",
		"Business and Personal Development Consultant",
	];

	return (
		<div className={styles.container} id="footer">
			<div className={styles.name}>
				<h3>{name}</h3>
				<div>
					{description.map((desc) => (
						<p key={desc}>{desc}</p>
					))}
				</div>
			</div>
			<div className={styles.connect}>
				<h3>Connect</h3>
				<div className={styles.social}>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/sophia-bygrave-sam-7619b050/?originalSubdomain=jm"
					>
						<img className={styles.icon} src="/linkedin.png"></img>
					</a>{" "}
					<a
						target="_blank"
						href="https://www.linkedin.com/in/sophia-bygrave-sam-7619b050/?originalSubdomain=jm"
					>
						<span>Linkedin</span>
					</a>
				</div>
			</div>
		</div>
	);
}
