import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

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
		<View style={styles.block}>
			<FlatList
				data={users}
				keyExtractor={(item) => `${item.id}${item.name}`}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.listItem}
						onPress={() => onOpenPosts(item.id, item.name)}
						key={`${item.id}${item.username}`}>
						<Avatar.Text
							style={styles.listItemInitials}
							size={40}
							label={initialsOfName(item.name)}
						/>
						<View style={styles.listItemNameEmail}>
							<Text>{item.name}</Text>
							<Text style={styles.email}>{item.email}</Text>
						</View>
						<View style={styles.posts}>
							<Text>{`${countPostsOfUser(item.id)} posts`}</Text>
							<AntDesign style={styles.icon} name="right" size={12} color="black" />
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 5,
		width: '100%',
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'stretch',
	},
	listItem: {
		flex: 1,
		// width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// alignItems: 'center',
	},
	listItemInitials: {
		// flex: 1,
		backgroundColor: '#6FCF97',
		color: '#000',
		// borderRadius: '50%',
		// padding: 8,
		// fontWeight: 500,
		// fontSize: 14,
	},
	listItemNameEmail: {
		// width: '60%',
		flex: 4,
		alignItems: 'flex-start',
		marginLeft: 15,
	},
	name: {
		fontSize: 16,
	},
	email: {
		color: '#382A2C',
		fontSize: 12,
	},
	posts: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontSize: 16,
	},
	icon: {
		marginLeft: 15,
	},
});
