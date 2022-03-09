import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import ChatHeader from './ChatHeader';
import { FontAwesome } from '@expo/vector-icons';
import ChatMessages from './ChatMessages';

const messages =  [
  {
    body: "Hello and welcome to the to this meeting everyone",
    senderId: "Patrick"
  },
  {
    body: "Goodday everyone",
    senderId: "Favour"
  },
  {
    body: "Hello, I'm Randolph, the newest member of the team",
    senderId: "Randolph"
  },
  {
    body: "Welcome to the team Randolph, I'm Vivian",
    senderId: "one"
  },
  {
    body: "Welcome, Randolph, I'm sure you'll find it easy to collaborate here. I'm Jackson by the way.",
    senderId: "Jackson"
  },
  {
    body: "Welcome Randolph and Goodday to you all.",
    senderId: "Jennifer"
  },
  {
    body: "Thank you all for the warm welcome.",
    senderId: "Randolph"
  },
  {
    body: "Let's wait a bit for a few more others to join before we begin the meeting",
    senderId: "Patrick"
  },
  {
    body: "Good idea",
    senderId: "Winston"
  },
  {
    body: "Yeah sure",
    senderId: "Jackson"
  },
  {
    body: "Hello everyone",
    senderId: "Thomas"
  },
  {
    body: "Hello everyone",
    senderId: "Michael"
  },
  {
    body: "Good afternoon everyone",
    senderId: "John"
  },
]

const ChatInput = ({ setModalVisible, userName }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message) {
            messages.push({
                body: message,
                senderId: userName
            });
            setMessage("");
        } else {
            return
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                    >
                        <>
                            <ChatHeader setModalVisible={setModalVisible} />
                            <View style={styles.chatMessages} >
                                <ChatMessages messages={messages} userName={userName} />
                            </View>
                            <View style={styles.chatFormCont} >
                                <Text style={{ color: "white" }}>Send to: Everyone</Text>
                                <View style={styles.chatForm} >
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Tap here to chat"
                                        value={message}
                                        onChangeText={setMessage}
                                        placeholderTextColor="#595859"
                                    />
                                    <TouchableOpacity
                                        style={[styles.sendButton, {
                                            backgroundColor: message ? "#01579b" : "#595859"
                                        }]}
                                        onPress={handleSendMessage}
                                    >
                                        <FontAwesome name="send" size={18} color="#efefef" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c",
    },
    chatMessages: {
        flex: 1,
        backgroundColor: "#000"
    },
    chatFormCont: {
        borderColor: "#2f2f2f",
        borderTopWidth: 1,
        padding: 12
    },
    chatForm: {
        flexDirection: "row",
    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1
    },
    sendButton: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        backgroundColor: "#373838",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})