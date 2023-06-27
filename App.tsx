import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import HomePage from './src/components/home-page';
import UserDetailsPage from './src/components/user-detail-page';


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="UserDetails" component={UserDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
