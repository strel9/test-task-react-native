import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import MainScreen from './screens/MainScreen';
import PostsScreen from './screens/PostsScreen';

import { Provider as PaperProvider } from 'react-native-paper';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const API_USERS = 'users';
const API_POSTS = 'posts';

export default function App() {
	const [users, setUsers] = React.useState([]);
	const [posts, setPosts] = React.useState([]);
	const [authorId, setAuthorId] = React.useState();
	const [activeUser, setActiveUser] = React.useState();

	useEffect(() => {
		fetch(`${API_URL}${API_USERS}`)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	useEffect(() => {
		fetch(`${API_URL}${API_POSTS}`)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);

	const search = (params) => {
		console.log(params);
	};

	const onOpenPosts = (id, name) => {
		setAuthorId(id);
		setActiveUser(name);
	};

	return (
		<PaperProvider>
			<StatusBar style="auto" />
			<View style={styles.container}>
				<Navbar users={users} posts={posts} authorId={authorId} activeUser={activeUser} />
				{authorId ? (
					<PostsScreen posts={posts} authorId={authorId} />
				) : (
					<MainScreen users={users} posts={posts} onOpenPosts={onOpenPosts} />
				)}
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#fff',
		flex: 1,
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
		// marginHorizontal: 20,
		// marginVertical: 20,
	},
});
