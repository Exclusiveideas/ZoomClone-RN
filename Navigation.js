import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';
import RoomForm from './screens/RoomForm';

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    title: "Start a Meeting",
                    headerStyle: {
                    backgroundColor: "white",
                },
                }} />
            <Stack.Screen name="Room" component={Room}
            options={{
                headerShown: false
            }}
             />
        </Stack.Navigator>
    )
}

export default Navigation


function Room(){
    return (
        <Stack.Navigator initialRouteName="Form"
        screenOptions={{
            headerShown: true,
                headerTitleAlign: 'center',
                headerTintColor: 'black',
                headerStyle: {
                backgroundColor: "white",
            },
            headerTitleStyle: {
                fontWeight: "bold"
            }
            }}>
            <Stack.Screen name="Form" component={RoomForm} 
            options={{
            headerTitle: "Create or Join a Room",
            }} />
            <Stack.Screen name="Meeting" component={MeetingRoom}
            options={{
                headerTitle: "Meeting",
                headerStyle: {
                    backgroundColor: "#1c1c1c"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}
             />
        </Stack.Navigator>
    )
}