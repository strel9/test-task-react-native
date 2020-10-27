import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default function PostsScreen({ posts, authorId }) {
	const newPosts = posts.filter((item) => item.userId === authorId);

	return (
		<View style={styles.block}>
			{newPosts.map((item) => (
				// <FlatList></FlatList>
				<View style={styles.item}>
					<View style={styles.title}>{item.title}</View>
					<View style={styles.post}>{item.body}</View>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		// borderStyle: 'solid',
		// borderWidth: 2,
		// borderColor: '#ff00ff',
	},
	item: {
		flex: 1,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#eeeeee',
		marginBottom: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: 800,
	},
	post: {
		fontSize: 12,
	},
});
