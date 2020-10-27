import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, setValueSearch } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Navbar({ users, posts, authorId, activeUser, setValueSearch }) {
	return (
		<View style={styles.block}>
			<Text style={styles.title}>{authorId ? `${activeUser}'s Posts` : 'Authors'}</Text>
			{/* <Icon style={styles.icon} name="rocket" size={20} color="#900" /> */}
			<AntDesign style={styles.icon} name="search1" size={17} color="black" />
			<TextInput onChangeText={setValueSearch} style={styles.input} placeholder="Search" />
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		width: '100%',
		// justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 20,
	},
	icon: {
		// bottom: '-50',
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
	},
	input: {
		width: '100%',
		backgroundColor: '#eeeeee',
		paddingLeft: 40,
		paddingTop: 5,
		paddingRight: 5,
		paddingBottom: 5,
		fontSize: 16,
	},
});
