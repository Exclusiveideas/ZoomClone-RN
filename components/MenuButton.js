import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const items = [
    {
        id: 1,
        name:"video-camera",
        title: 'New Meeting',
        customColor: '#FF6600'

    },
    {
        id: 2,
        name:"plus-square",
        title: 'Join'

    },
    {
        id: 3,
        name:"calendar",
        title: 'Schedule'

    },
    {
        id: 4,
        name:"upload",
        title: 'Share Screen'

    },
]

const MenuButton = ({ navigation }) => {

    const openMeeting = (item) => {
        if(item.name == "video-camera" || item.name == "plus-square") {
            navigation.navigate('Room')
        } else {
            return;
        }
        
    }
     
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <View style={styles.buttonContainer} key={item.id}>
                    <TouchableOpacity 
                    onPress={() => openMeeting(item)}
                    style={[styles.button, {
                        backgroundColor: item.customColor ? item.customColor : '#0470DC'
                    }]}>
                        <FontAwesome name={item.name} size={23} color="#efefef" />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>{item.title}</Text>
                </View>
            ))}
        </View>
    )
}

export default MenuButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: '#1F1F1F',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuText: {
        color: '#858585',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '600'
    }
})