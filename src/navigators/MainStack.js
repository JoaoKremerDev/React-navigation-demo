import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#0000ff',
                height: 80,
            },
            headerTitleStyle: {
                color: "#FFF",
                fontSize: 16
            }
        }}>
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Início",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0000ff',
                        height: 120,
                    },
                    headerTitleStyle: {
                        color: '#FFF',
                        fontSize: 23,
                        fontWeight: 'bold'
                    }

                }} />
            <MainStack.Screen
                name="About"
                component={AboutScreen}
                options={(props) => ({
                    title: props.route.params?.name,
                    headerStyle: {
                        backgroundColor: props.route.params?.color ?? '#FF0000'
                    },
                    headerTitleStyle: {
                        color: '#00000'
                    },
                    headerBackTitle: "Voltar",
                })
                }
            />
        </MainStack.Navigator>
    );
}   
