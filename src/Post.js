import styles from "../styles/Post.module.css";
import Link from "next/link";
function Post({ title, body, date, link }) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Link href={link}>
					<a>
						<p>{title}</p>
					</a>
				</Link>
			</div>
			<div className={styles.body}>
				<pre>{body}</pre>
			</div>
			<div className={styles.date}>
				<p>{date}</p>
				<p className={styles.author}>By Sophia Bygrave</p>
			</div>
		</div>
	);
}

export default Post;
