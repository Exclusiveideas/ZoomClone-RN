import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const contactMenuButtons = [
    {
        id: 1,
        type: "starred",
        name: "Starred"
    },
    {
        id: 2,
        type: "contact",
        name: "Exclusive ideas",
        photo: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
    },
    {
        id: 3,
        type: "contact",
        name: "Jane dou",
        photo: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        id: 4,
        type: "contact",
        name: "Muftaudeen Jimoh",
        photo: "https://image.shutterstock.com/image-photo/smiling-handsome-dude-grey-portrait-260nw-575234701.jpg"
    }
]

const ContactsMenu = () => {
    return (
        <View>
            {contactMenuButtons.map((button) => (
                <View style={styles.row} key={button.id}>
                    {button.type == "starred" ? (
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#efefef" />
                        </View>) :
                        (
                            <Image source={{ uri : button.photo}} alt="photo" style={styles.image} />
                        )}

                    <Text style={styles.text}>
                        {button.name}
                    </Text>
                </View>

            ))}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: '#fff',
        paddingLeft: 15,
        fontSize: 18
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    }

})