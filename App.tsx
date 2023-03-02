import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Landing from './src/screen/auth/Landing';
import Login from './src/screen/auth/Login';
import SignUp from './src/screen/auth/SignUp';
import Color from './src/const/Color';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
          // options={({ navigation, route }) => ({
          //   title: 'Register',
          //   headerStyle: {
          //     backgroundColor: darkGreen,
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          //   headerLeft: () => (
          //     <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
          //       <Icon name="arrow-back" color="#fff" size={30} />
          //     </TouchableOpacity>
          //   ),
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
