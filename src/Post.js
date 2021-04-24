import styles from "../styles/Post.module.css";

function Post({ title, body, date }) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>{title}</p>
			</div>
			<div className={styles.body}>
				<p>{body}</p>
			</div>
			<div className={styles.date}>
				<p>{date}</p>
			</div>
		</div>
	);
}

export default Post;
