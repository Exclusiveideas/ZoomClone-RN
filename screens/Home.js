import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButton from '../components/MenuButton'
import ContactsMenu from '../components/ContactsMenu'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();

    return ( 
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%',}}>
                <Header />
                <SearchBar />
                <MenuButton navigation={navigation} />
                <ContactsMenu navigation={navigation} />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1c1c1c',
        padding: 15
    }
})
