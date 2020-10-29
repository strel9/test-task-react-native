import React from 'react';
import { StyleSheet, Text, TextInput, View, setValueSearch, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Navbar({
	activeUser,
	authorId,
	searchQuery,
	onChangeSearch,
	setAuthorId,
	setActiveUser,
}) {
	const handleChangeSearch = (value, searchQuery) => {
		onChangeSearch(value);
	};
	const handlePressButton = () => {
		setAuthorId(null);
		setActiveUser(null);
	};

	return (
		<View style={styles.block}>
			<Text style={styles.title}>{activeUser ? `${activeUser}'s Posts` : 'Authors'}</Text>

			<View style={styles.searchWrapper}>
				<Searchbar
					style={styles.searchInput}
					placeholder="Search"
					onChangeText={(value, searchQuery) => handleChangeSearch(value, searchQuery)}
					value={searchQuery}
				/>
				{authorId && <Button style={styles.button1} title="back" onPress={handlePressButton} />}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		// width: '100%',
		// justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: 15,
		marginBottom: 15,
	},
	icon: {
		// bottom: '-50',
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
		paddingTop: 20,
	},
	searchWrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	searchInput: {
		flex: 5,
		width: '100%',
		backgroundColor: '#eeeeee',
		// paddingLeft: 40,
		// paddingTop: 5,
		// paddingRight: 5,
		// paddingBottom: 5,
		// fontSize: 16,
		// shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},
	button1: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
	},
	button2: {
		// flex: 1,
		// width: '100%',
	},

	// searchSection: {
	// 	flex: 1,
	// 	flexDirection: 'row',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	backgroundColor: '#fff',
	// 	width: '100%',
	// },
	// searchIcon: {
	// 	padding: 10,
	// 	backgroundColor: '#eeeeee',
	// },
	// searchInput: {
	// 	flex: 1,
	// 	paddingTop: 10,
	// 	paddingRight: 10,
	// 	paddingBottom: 10,
	// 	paddingLeft: 0,
	// 	backgroundColor: '#eeeeee',
	// 	color: '#424242',
	// },

	// passwordContainer: {
	// 	flexDirection: 'row',
	// 	borderBottomWidth: 1,
	// 	borderColor: '#000',
	// 	paddingBottom: 10,
	// },
	// inputStyle: {
	// 	flex: 1,
	// },
});
