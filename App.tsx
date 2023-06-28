import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/home-page';
import UserDetailsPage from './src/components/user-detail-page';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="UserDetails" component={UserDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
