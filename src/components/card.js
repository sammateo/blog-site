import styles from "../../styles/Card.module.css";
export default function Card({ position, business, time, description }) {
	return (
		<div className={styles.container}>
			<h3>{position}</h3>
			<p className={styles.business}>{business}</p>
			<p className={styles.time}>{time}</p>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
