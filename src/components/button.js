import Link from "next/link";
import styles from "../../styles/components/button.module.css";
export default function Button({ label }) {
	return (
		<div>
			<Link href="/">
				<button className={styles.button}>&#8592; {label}</button>
			</Link>
		</div>
	);
}
