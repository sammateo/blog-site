import Post from "./Post";
import styles from "../styles/Posts.module.css";
import { useState, useEffect } from "react";

export default function Posts() {
	const [info, setInfo] = useState([
		{ title: "", body: "", data: "", link: "" },
	]);
	const [loading, setLoading] = useState(true);
	async function getData() {
		let data = await fetch("/data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});

		let obj = await data.json();
		setInfo(obj);
		setLoading(false);
	}
	useEffect(() => {
		getData();
	}, []);

	// let para2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Curabitur vitae nunc sed velit dignissim sodales ut eu. Ultricies tristique nulla aliquet enim tortor at. Tortor posuere ac ut consequat semper. Morbi non arcu risus quis varius quam. Lacus laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum lacinia. Ut enim blandit volutpat maecenas volutpat blandit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ac auctor augue mauris augue neque gravida in fermentum. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Quis viverra nibh cras pulvinar mattis. In dictum non consectetur a erat. Ullamcorper morbi tincidunt ornare massa eget egestas. Sit amet consectetur adipiscing elit ut aliquam purus sit. Arcu cursus vitae congue mauris rhoncus aenean. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ornare lectus sit amet est placerat in egestas. Fermentum leo vel orci porta non.`;

	return (
		<div className={styles.container}>
			{info.map((data) => (
				<div key={data.id}>
					<Post
						loading={loading}
						title={data.title}
						body={data.body}
						date={data.date}
						link={data.link}
					></Post>
				</div>
			))}
		</div>
	);
}

// const info = [
// 	{
// 		id: 1,
// 		title: "Lorem ipsum",
// 		body: para2,
// 		date: "April 23, 2021",
// 		link: "/Post1",
// 	},
// 	{
// 		id: 2,
// 		title: "Lorem ipsum dolor sit amet",
// 		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam sit. Tincidunt arcu non sodales neque sodales ut etiam. Sapien faucibus et molestie ac feugiat. At tempor commodo ullamcorper a lacus vestibulum sed arcu. At tempor commodo ullamcorper a lacus. Elementum nibh tellus molestie nunc non blandit massa enim. Nullam vehicula ipsum a arcu cursus. Interdum consectetur libero id faucibus. Vitae sapien pellentesque habitant morbi. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Eros in cursus turpis massa tincidunt dui.",
// 		date: "April 24,2021",
// 		link: "/Post1",
// 	},

// 	{
// 		id: 3,
// 		title: "Lorem ipsum dolor sit amet",
// 		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam sit. Tincidunt arcu non sodales neque sodales ut etiam. Sapien faucibus et molestie ac feugiat. At tempor commodo ullamcorper a lacus vestibulum sed arcu. At tempor commodo ullamcorper a lacus. Elementum nibh tellus molestie nunc non blandit massa enim. Nullam vehicula ipsum a arcu cursus. Interdum consectetur libero id faucibus. Vitae sapien pellentesque habitant morbi. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Eros in cursus turpis massa tincidunt dui.",
// 		date: "April 24,2021",
// 		link: "/Post1",
// 	},
// ];
