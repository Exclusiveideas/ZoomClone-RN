import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import StartMeeting from '../components/StartMeeting';

const RoomForm = () => {
    const [name, setName] = useState('');
    const [roomId, setRoomId] = useState('');

  return (
    <View style={styles.container}>
    <StartMeeting name={name} setName={setName} roomId={roomId} setRoomId={setRoomId} />
    </View>
  )
}

export default RoomForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
})