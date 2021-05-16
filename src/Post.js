import styles from "../styles/Post.module.css";
import Link from "next/link";
import { useState } from "react";
function Post({ title, body, date, link, loading }) {
	return (
		<div className={styles.container}>
			{loading ? (
				<img src="/loading.png" className={styles.loading}></img>
			) : null}

			<div className={styles.title}>
				{/* <Link href={link}>
					<a>
						<p>{title}</p>
					</a>
				</Link> */}

				<Link href="/posts/[title]" as={"/posts/" + title}>
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
