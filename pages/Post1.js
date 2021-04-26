import Head from "next/head";
import styles from "../styles/Articles.module.css";
import Button from "../src/components/button";
import Post from "../src/Post";
export default function Post1() {
	const info = {
		id: 1,
		title: "Title1",
		body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti. Mi sit amet mauris commodo quis imperdiet. Quam nulla porttitor massa id. Sit amet nisl suscipit adipiscing. Egestas diam in arcu cursus euismod. Eget felis eget nunc lobortis mattis aliquam. Sit amet facilisis magna etiam tempor. Orci sagittis eu volutpat odio. Sodales neque sodales ut etiam sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Dui sapien eget mi proin. Vel orci porta non pulvinar. Eget nunc lobortis mattis aliquam faucibus purus. Felis bibendum ut tristique et egestas quis ipsum. Massa massa ultricies mi quis. Leo in vitae turpis massa sed elementum tempus egestas sed. Dolor sit amet consectetur adipiscing elit.

		Consequat id porta nibh venenatis cras. Pulvinar mattis nunc sed blandit libero volutpat sed. Cras tincidunt lobortis feugiat vivamus at augue. Orci dapibus ultrices in iaculis nunc. Eget sit amet tellus cras adipiscing enim eu turpis. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Vel eros donec ac odio. Erat velit scelerisque in dictum non consectetur a erat nam. Eget egestas purus viverra accumsan in. Volutpat commodo sed egestas egestas.`,
		date: "April 23, 2021",
		link: "/Post1",
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Post1</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Post
				title={info.title}
				body={info.body}
				date={info.date}
				link={info.link}
			></Post>
			<Button label={"Back to Home"}></Button>
		</div>
	);
}
