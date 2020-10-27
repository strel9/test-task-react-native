import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar({ users, posts, authorId, activeUser }) {
	return (
		<View style={styles.block}>
			<Text style={styles.title}>{authorId ? `${activeUser}'s Posts` : 'Authors'}</Text>
			<TextInput style={styles.input} placeholder="Search"></TextInput>
			<Icon name="rocket" size={20} color="#900" />
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-beetwen',
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
	},
	input: {
		width: '100%',
		backgroundColor: '#eeeeee',
		padding: 5,
		fontSize: 16,
	},
});
