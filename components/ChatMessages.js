import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
const ChatMessages = ({ messages, userName }) => {

  return (
    <ScrollView style={styles.container}>
      {messages.map((message, i) => (
        <View key={i} style={{
          alignItems : message.senderId === userName ? "flex-end" : "flex-start",
        }}>
          <View style={styles.messageCont}>
            <Text style={styles.message}>
              {message.body}
            </Text>
            <Text style={[styles.sender, { alignSelf : "flex-end" }]}>
            {message.senderId}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default ChatMessages

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  messageCont: {
    borderRadius: 8,
    backgroundColor: "#01579b",
    width: 220,
    padding: 5,
    marginTop: 10,
    marginLeft: 15
  },
  message: {
    color: "#fff",
    fontSize: 16
  },
  sender: {
    color: "#7f7f7f",
    fontSize: 13
  }
})