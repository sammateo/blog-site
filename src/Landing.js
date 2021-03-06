import styles from "../styles/Landing.module.css";
import Link from "next/link";
export default function Landing({ title }) {
	let i = 1;
	function close() {
		let exit = document.querySelector(".exit");
		if (i == 0) {
			exit.parentElement.style.transform = "translateX(100%)";
			i = 1;
		} else {
			exit.parentElement.style.transform = "translateX(0%)";
			i = 0;
		}
		// console.log(exit.parentElement);
	}
	return (
		<div className={styles.container}>
			{/* <label className={styles.exitlabel} htmlFor="burger">
				Menu
			</label>
			<input
				type="checkbox"
				id="burger"
				name="burger"
				className={styles.burger}
				onClick={close}
			></input> */}
			<div onClick={close} className={styles.burger}>
				<div className={styles.bar1}></div>
				<div className={styles.bar2}></div>
				<div className={styles.bar3}></div>
			</div>

			<img src="/pfp.jfif" className={styles.pfp}></img>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.contact}>
				<p>sophiadvisor@gmail.com</p>
			</div>
			<div className={styles.menu}>
				{/* <label className={styles.exitlabel} htmlFor="exit">
					Exit
				</label>
				<input
					type="checkbox"
					id="exit"
					name="exit"
					className={styles.exit + " exit"}
					onClick={close}
				></input> */}

				<div onClick={close} className={styles.exit + " exit"}>
					<div className={styles.bar1}></div>
					<div className={styles.bar2}></div>
					<div className={styles.bar3}></div>
				</div>
				<div className={styles.menuitems}>
					<Link href="/">
						<p>Posts</p>
					</Link>

					<Link href="/About">
						<p>About</p>
					</Link>
					<Link href="#footer">
						<p>Contact</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
