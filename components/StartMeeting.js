import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const StartMeeting = ({ name, setName, roomId, setRoomId }) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    const onJoinRoom = () => {
        if (name && roomId) {
            navigation.navigate("Meeting", {
                name: name,
            })
        } else {
            setVisible(true)
        }
    }


    return (
        <View>
            <View style={styles.startMeetingCont}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter name"
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.input}
                        value={roomId}
                        keyboardType='numeric'
                        onChangeText={setRoomId}
                        placeholder="Enter room id"
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.meetingButton}
                        onPress={onJoinRoom}
                    >
                        <Text style={{ color: "white", fontWeight: 'bold' }}>Start Meeting</Text>
                    </TouchableOpacity>
                </View>
                <Snackbar
                    visible={visible}
                    duration={400}
                    onDismiss={() => setVisible(false)}
                    style={{
                        top: 100,
                    }}
                >
                    Name and Room id is required
                </Snackbar>

            </View>
        </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: 'center'
    },
    input: {
        color: "white",
        fontSize: 18,
    },
    meetingButton: {
        width: 300,
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0470DC",
        borderRadius: 15
    }
})