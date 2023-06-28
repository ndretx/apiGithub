import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RepositoryDetailsPage = ({ route }) => {
  const { repository } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.description}>{repository.description}</Text>
      {/* Exibir mais detalhes do repositório, se necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default RepositoryDetailsPage;
