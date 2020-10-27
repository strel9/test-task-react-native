import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default function PostsScreen({ posts, authorId }) {
	const newPosts = posts.filter((item) => item.userId === authorId);
	const strFirstCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<View style={styles.block}>
			<FlatList
				data={newPosts}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<View style={styles.title}>{strFirstCapital(item.title)}</View>
						<View style={styles.post}>{item.body}</View>
					</View>
				)}
			/>
			{/* {newPosts.map((item) => (
				<View style={styles.item}>
					<View style={styles.title}>{item.title}</View>
					<View style={styles.post}>{item.body}</View>
				</View>
			))} */}
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
		paddingLeft: 18,
		paddingRight: 17,
		paddingBottom: 12,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	title: {
		marginTop: 12,
		marginBottom: 12,
		fontSize: 16,
		fontWeight: 800,
	},
	post: {
		fontSize: 12,
		color: '#382A2C',
	},
});
