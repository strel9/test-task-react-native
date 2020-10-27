import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserItems({ users, posts, onOpenPosts }) {
	const initialsOfName = (name) =>
		((name.match(/\b\w/g) || []).shift() || '') + ((name.match(/\b\w/g) || []).pop() || '');

	const countPostsOfUser = (idFromUsers) => {
		let counter = 0;
		posts.forEach((item) => {
			if (item.userId === idFromUsers) {
				counter++;
			}
		});
		return counter;
	};

	return (
		<>
			<FlatList
				style={styles.blockMain}
				data={users}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.blockItem}
						onPress={() => onOpenPosts(item.id, item.name)}
						key={`${item.id}${item.username}`}>
						<View style={styles.initials}>{initialsOfName(item.name)}</View>
						<View style={styles.blockNameEmail}>
							<View>{item.name}</View>
							<View style={styles.email}>{item.email}</View>
						</View>
						<View style={styles.posts}>
							{`${countPostsOfUser(item.id)} posts`}
							<Icon name="rocket" size={30} color="#900" />
						</View>
					</TouchableOpacity>
				)}
			/>

			{/* {users.map((item) => (
				<TouchableOpacity
					style={styles.blockItem}
					onPress={() => onOpenPosts(item.id, item.name)}
					key={`${item.id}${item.username}`}>
					<View style={styles.initials}>{initialsOfName(item.name)}</View>
					<View style={styles.blockNameEmail}>
						<View>{item.name}</View>
						<View style={styles.email}>{item.email}</View>
					</View>
					<View style={styles.posts}>
						{`${countPostsOfUser(item.id)} posts`}
						<Icon name="rocket" size={30} color="#900" />
					</View>
				</TouchableOpacity>
			))} */}
		</>
	);
}

const styles = StyleSheet.create({
	blockMain: {
		width: '100%',
		// flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'space-between',
	},
	blockItem: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	initials: {
		backgroundColor: '#6FCF97',
		borderRadius: '50%',
		borderColor: 'green',
		color: '#00000',
		padding: 8,
		fontWeight: 500,
		fontSize: 14,
	},
	blockNameEmail: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 10,
	},
	name: {
		fontSize: 16,
	},
	email: {
		color: '#948C8D',
		fontSize: 12,
	},
	posts: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontSize: 16,
	},
});
