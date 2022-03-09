import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={{fontWeight: 'bold', marginRight: 8}} size={23} color="#858585" />
            <TextInput
                placeholderTextColor="#858585"
                placeholder='Search'
                style={styles.input}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    input: {
        color: '#858585',
        fontSize: 20,
        flex: 1
    }
})