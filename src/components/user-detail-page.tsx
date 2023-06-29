import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const UserDetailsPage = ({ route, navigation }) => {
  const { user } = route.params;
  const [searchText, setSearchText] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [searchedRepositories, setSearchedRepositories] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  function handleSearch() {
    console.log(`Searching repositories for user: ${user.avatrUrl}`);

    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'Bearer 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', // Replace with your GitHub access token
      },
    };
    fetch(`https://api.github.com/users/${user.userName}/repos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          const repositoriesData = result.map((repo) => ({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            private: repo.private,
            gitUrl: repo.git_url,
            createdAt: repo.created_at,
            watchers: repo.watchers,
            language: repo.language,
            forks: repo.forks,
            defaultBranch: repo.default_branch,
            avatarUrl: user.avatarUrl
          }));

          setRepositories(repositoriesData);
          filterRepositories(repositoriesData);
        } else {
          setRepositories([]);
          setSearchedRepositories([]);
        }
      })
      .catch((error) => console.log('Error:', error));
  }

  function filterRepositories(repositoriesData) {
    const filteredRepositories = repositoriesData.filter((repo) =>
      repo.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedRepositories(filteredRepositories);
  }

  function handleUserPress(selectedUser) {
    navigation.navigate('RepositoryDetailsPage', { user: selectedUser });
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <Text style={styles.userName}>{user.userName}</Text>
      <Text style={styles.repoUrl}>{user.repoUrl}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search repositories"
          style={styles.input}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchedRepositories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleUserPress(item)}>
            <View style={styles.repoList}>
              <Text style={styles.repoName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  repoUrl: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4078c0',
  },
  repoList: {
    backgroundColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cecece',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    width: 350,
    paddingTop: 10,
  },
  containerList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    width: 350,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default UserDetailsPage;