import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
		<View style={styles.userBlock}>
			<FlatList
				data={users}
				keyExtractor={(item) => `${item.id}${item.name}`}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.userItem}
						onPress={() => onOpenPosts(item.id, item.name)}
						key={`${item.id}${item.username}`}>
						<Avatar.Text
							style={styles.userItemInitials}
							size={40}
							label={initialsOfName(item.name)}
						/>
						<View style={styles.userItemNameEmail}>
							<Text>{item.name}</Text>
							<Text style={styles.email}>{item.email}</Text>
						</View>
						<View style={styles.postNumber}>
							<Text>{`${countPostsOfUser(item.id)} posts`}</Text>
							<AntDesign style={styles.postNumberIcon} name="right" size={12} color="black" />
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	userBlock: {
		flex: 5,
		width: '100%',
		justifyContent: 'space-between',
	},
	userItem: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 12,
		paddingBottom: 12,
		marginBottom: 10,
	},
	userItemInitials: {
		backgroundColor: '#6FCF97',
		color: '#382A2C',
		// flex: 1,
		// borderRadius: '50%',
		// padding: 8,
		// fontWeight: 500,
		fontSize: 10,
	},
	userItemNameEmail: {
		flex: 4,
		flexDirection: 'column',
		justifyContent: 'space-around',
		// alignItems: 'flex-start',
		marginLeft: 15,
	},
	name: {
		fontSize: 16,
	},
	email: {
		color: '#948C8D',
		fontSize: 12,
	},
	postNumber: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		color: '#382A2C',
		fontSize: 16,
	},
	postNumberIcon: {
		color: '#382A2C',
		marginLeft: 15,
	},
});
