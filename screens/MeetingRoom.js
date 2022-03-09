import { Modal, StyleSheet, Text, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import ChatInput from '../components/ChatInput';
import { Snackbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
const menuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Mute",
        customColor: "#efefef"
    },
    {
        id: 2,
        name: "video-camera",
        title: "Stop Video",
    },
    {
        id: 3,
        name: "upload",
        title: "Share Contact",
    },
    {
        id: 4,
        name: "group",
        title: "Participants",
    },
]

const MeetingRoom = () => {
    const route = useRoute();

    const { name } = route.params;
    const [startCamera, setStartCamera] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    const onStartCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === "granted") {
            setStartCamera(true)
        } else {
            setVisible(true); 
        }
    }


    useEffect(() => {
        onStartCamera();
    }, []);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.activeUsersHigherCont}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    presentationStyle={"fullScreen"}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <ChatInput
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        userName={name}
                    />
                </Modal>

                {startCamera && (<Camera
                    type={"front"}
                    style={{
                        width: "100%",
                        height: 600 
                    }}
                >
                </Camera>)}
                <View style={styles.menu}>
                    <>
                        {menuIcons.map((icon) => (
                            <TouchableOpacity
                                style={styles.tile}
                                key={icon.id}
                            >
                                <FontAwesome name={icon.name} size={24} color="#efefef" />
                                <Text style={styles.textTile}>{icon.title}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.tile}
                        >
                            <FontAwesome name="comment" size={24} color="#efefef" />
                            <Text style={styles.textTile}>Chat</Text>
                        </TouchableOpacity>
                    </>
                </View>
            </View>
            <Snackbar
                visible={visible}
                duration={400}
                onDismiss={() => setVisible(false)}
                style={{
                    position: "absolute",
                    top: "50%",
                    alignItems: "center",
                    zIndex: 100
                }}
            >
                Access Denied
            </Snackbar>
        </KeyboardAvoidingView>
    )
}


export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
    tile: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 15
    },
    textTile: {
        color: "white",
        marginTop: 10
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        borderColor: "red",
    },
    camCont: {
        backgroundColor: 'black',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    activeUsersHigherCont: {
        flex: 1,
        alignItems: "center"
    }
})


