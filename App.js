import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Src/Auth/Login';
import LoginMain from './Src/Auth/LoginMain';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name='Dashboard' component={Login} options={{ headerShown:false }}/>
        <Stack.Screen name='Login' component={LoginMain} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
