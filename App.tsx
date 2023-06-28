import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/home-page';
import UserDetailsPage from './src/components/user-detail-page';
import RepositoryDetailsPage from './src/components/repo-details';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="UserDetails" component={UserDetailsPage} />
        <Stack.Screen name="RepositoryDetailsPage" component={RepositoryDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
