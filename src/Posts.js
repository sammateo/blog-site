import Post from "./Post";

export default function Posts() {
	const info = [
		{
			id: 1,
			title: "Title1",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: "April 23, 2021",
		},
		{
			id: 2,
			title: "Title2",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam sit. Tincidunt arcu non sodales neque sodales ut etiam. Sapien faucibus et molestie ac feugiat. At tempor commodo ullamcorper a lacus vestibulum sed arcu. At tempor commodo ullamcorper a lacus. Elementum nibh tellus molestie nunc non blandit massa enim. Nullam vehicula ipsum a arcu cursus. Interdum consectetur libero id faucibus. Vitae sapien pellentesque habitant morbi. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Eros in cursus turpis massa tincidunt dui.",
			date: "April 25,2021",
		},
	];
	return (
		<div>
			{info.map((data) => (
				<div key={data.id}>
					<Post title={data.title} body={data.body} date={data.date}></Post>
				</div>
			))}
		</div>
	);
}
