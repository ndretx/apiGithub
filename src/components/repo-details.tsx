import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RepositoryDetailsPage({ route }) {

  const { user } = route.params;
 

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 50, alignItems: 'center',}}>
      <Text style={styles.repositoryName}>{user.name}</Text>
      <Text style={styles.repositoryFullName}>{user.fullName}</Text>
      </View>
      <View style={{marginVertical: 20,marginHorizontal: 20, alignItems: 'flex-start',}} >
      <Text style={styles.repositoryForks}>Data: {user.createdAt}</Text>
      <Text style={styles.repositoryForks}>Repo Url: {user.repoUrl}</Text>
      <Text style={styles.repositoryWatchers}>Watchers: {user.watchers}</Text>
      <Text style={styles.repositoryLanguage}>Language: {user.language}</Text>
      <Text style={styles.repositoryForks}>Forks: {user.forks}</Text>
      <Text style={styles.repositoryForks}>Description: {user.description}</Text>
      <Text style={styles.repositoryForks}>Branch: {user.defaultBranch}</Text>
      
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  repositoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  repositoryDescription: {
    fontSize: 16,
    color: '#fff',
  },
  repositoryFullName: {
    fontSize: 11,
    color: '#fff', 
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
});