// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

import Navbar from './components/Navbar';
import AuthorsScreen from './screens/AuthorsScreen';
import PostsScreen from './screens/PostsScreen';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const API_USERS = 'users';
const API_POSTS = 'posts';

// async function loadApplication() {
// 	await Font.loadAsync({
// 		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
// 		'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
// 	});
// }

export default function App() {
	useEffect(() => {
		fetch(`${API_URL}${API_USERS}`)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});

		fetch(`${API_URL}${API_POSTS}`)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);

	const [users, setUsers] = React.useState([]);
	const [posts, setPosts] = React.useState([]);

	const [authorId, setAuthorId] = React.useState(null);
	const [activeUser, setActiveUser] = React.useState(null);
	const [searchQuery, setSearchQuery] = React.useState('');

	const onChangeSearch = (query) => setSearchQuery(query);

	const search = (arr, key1, key2) => {
		return arr.filter(
			(item) =>
				item[key1].toLowerCase().includes(searchQuery.toLowerCase()) ||
				item[key2].toLowerCase().includes(searchQuery.toLowerCase()),
		);
	};

	const searchSent = () => {
		if (authorId) {
			return search(posts, 'title', 'body');
		} else {
			return search(users, 'name', 'email');
		}
	};

	const visbleItems = searchSent();

	const onOpenPosts = (id, name) => {
		setAuthorId(id);
		setActiveUser(name);
	};

	return (
		<PaperProvider>
			{/* <StatusBar style="auto" /> */}
			<View style={styles.container}>
				<Navbar
					authorId={authorId}
					activeUser={activeUser}
					authorId={authorId}
					searchQuery={searchQuery}
					onChangeSearch={onChangeSearch}
					setAuthorId={setAuthorId}
					setActiveUser={setActiveUser}
				/>

				{authorId ? (
					<PostsScreen posts={visbleItems} authorId={authorId} />
				) : (
					<AuthorsScreen users={visbleItems} posts={posts} onOpenPosts={onOpenPosts} />
				)}
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
		// marginHorizontal: 20,
		// marginVertical: 20,
	},
});
