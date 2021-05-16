import Head from "next/head";
import styles from "../../styles/Articles.module.css";
import Button from "../../src/components/button";
import Post from "../../src/Post";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Post1() {
	const info = {
		id: 1,
		title: "Title1",
		body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti. Mi sit amet mauris commodo quis imperdiet. Quam nulla porttitor massa id. Sit amet nisl suscipit adipiscing. Egestas diam in arcu cursus euismod. Eget felis eget nunc lobortis mattis aliquam. Sit amet facilisis magna etiam tempor. Orci sagittis eu volutpat odio. Sodales neque sodales ut etiam sit amet. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Dui sapien eget mi proin. Vel orci porta non pulvinar. Eget nunc lobortis mattis aliquam faucibus purus. Felis bibendum ut tristique et egestas quis ipsum. Massa massa ultricies mi quis. Leo in vitae turpis massa sed elementum tempus egestas sed. Dolor sit amet consectetur adipiscing elit.

		Consequat id porta nibh venenatis cras. Pulvinar mattis nunc sed blandit libero volutpat sed. Cras tincidunt lobortis feugiat vivamus at augue. Orci dapibus ultrices in iaculis nunc. Eget sit amet tellus cras adipiscing enim eu turpis. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Vel eros donec ac odio. Erat velit scelerisque in dictum non consectetur a erat nam. Eget egestas purus viverra accumsan in. Volutpat commodo sed egestas egestas.`,
		date: "April 23, 2021",
		link: "/Post1",
	};

	const router = useRouter();
	// console.log(router);
	const { title } = router.query;
	const [data, setData] = useState([
		{ title: title, body: "", data: "", link: "" },
	]);
	const [post, setPost] = useState(info);
	const [loading, setLoading] = useState(true);

	const getData = () => {
		fetch("/data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				// console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				// console.log(myJson);
				setData(myJson);
				setLoading(false);
				data.map((dat) => {
					if (dat.title == title) {
						setPost(dat);
					}
				});
			});
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Post1</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{data.map((data1) =>
				data1.title == title ? (
					<Post
						key={data1.title}
						title={data1.title}
						body={data1.body}
						date={data1.date}
						link={data1.link}
						loading={loading}
					></Post>
				) : null
			)}
			<Button label={"Back to Home"}></Button>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = [
		{ params: { title: "Lorem ipsum" } },
		{ params: { title: "Lorem ipsum dolor sit amet" } },
		{ params: { title: "Lorem ipsum dolor sit amet dolor" } },
	];
	return { paths, fallback: false };
}

export async function getStaticProps(params) {
	const title = params.params.title;
	fetch("data.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (myJson) {
			console.log(myJson);
			setData(myJson);
		});
	return {
		props: { title },
	};
}
