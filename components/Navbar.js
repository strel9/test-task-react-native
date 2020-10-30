import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Navbar({
	activeUser,
	// authorId,
	searchQuery,
	onChangeSearch,
	// setAuthorId,
	// setActiveUser,
}) {
	const handleChangeSearch = (value) => {
		onChangeSearch(value);
	};
	// const handlePressButton = () => {
	// 	setAuthorId(null);
	// 	setActiveUser(null);
	// };

	return (
		<View style={styles.block}>
			<Text style={styles.title}>{activeUser ? `${activeUser}'s Posts` : 'Authors'}</Text>

			<Searchbar
				style={styles.searchInput}
				placeholder="Search"
				onChangeText={(value) => handleChangeSearch(value)}
				value={searchQuery}
			/>
			{/* {authorId && <Button style={styles.button1} title="back" onPress={handlePressButton} />} */}
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		alignItems: 'flex-start',
		marginTop: 12,
		marginBottom: 12,
	},
	title: {
		// fontFamily: 'Roboto',
		fontSize: 16,
		marginBottom: 20,
		paddingTop: 20,
	},
	searchInput: {
		flex: 1,
		width: '100%',
		backgroundColor: '#eeeeee',
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},
});
