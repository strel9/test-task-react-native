import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function PostsScreen({ posts, authorId }) {
	const newPosts = posts.filter((item) => item.userId === authorId);
	const strFirstCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);
	return (
		<View style={styles.postBlock}>
			<FlatList
				data={newPosts}
				keyExtractor={(item) => `${item.userId}${item.id}`}
				renderItem={({ item }) => (
					<View style={styles.postItemWrapper}>
						<View style={styles.postItem}>
							<Text style={styles.postTitle}>{strFirstCapital(item.title)}</Text>
							<Text style={styles.postText}>{item.body}</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	postBlock: {
		flex: 5,
	},
	postItemWrapper: {
		overflow: 'hidden',
		paddingBottom: 5,
	},
	postItem: {
		flex: 1,
		borderStyle: 'solid',
		borderColor: '#eeeeee',
		borderWidth: 1,
		paddingLeft: 18,
		paddingRight: 17,
		paddingBottom: 12,
		marginBottom: 24,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	postTitle: {
		marginTop: 12,
		marginBottom: 12,
		fontSize: 16,
		color: '#382A2C',
	},
	postText: {
		fontSize: 12,
		color: '#948C8D',
	},
});
