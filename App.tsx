
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/home-page';

export default function App() {
  return (
    <HomePage/>
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
