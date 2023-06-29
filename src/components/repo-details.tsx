import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function RepositoryDetailsPage({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <Text style={styles.repositoryName}>{user.name}</Text>
      <Text style={styles.repositoryFullName}>{user.fullName}</Text>
      <Text style={styles.repositoryLanguage}>Language: {user.language}</Text>
      <Text style={styles.repositoryWatchers}>Watchers: {user.watchers}</Text>
      <Text style={styles.repositoryForks}>Forks: {user.forks}</Text>
      <Text style={styles.repositoryForks}>Description: {user.description}</Text>
      <Text style={styles.repositoryForks}>Branch: {user.defaultBranch}</Text>
      <Text style={styles.repositoryForks}>Data: {user.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repositoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  repositoryDescription: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  repositoryFullName: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  repositoryLanguage: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  repositoryWatchers: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  repositoryForks: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
  },
});
