import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    heading: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: '700'
    }
})