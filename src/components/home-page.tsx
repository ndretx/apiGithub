import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Image } from 'react-native';

import GitEntity from '../entity/git-entities';

const HomePage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState([]);

  function handleSearch() {
    if (searchText.trim() === '') {
      setUser([]);
      return;
    }

    const requestOptions = {
      method: 'GET',
    };

    fetch(`https://api.github.com/users/${searchText}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.login) {
          const userObj = {
            id: result.id,
            userName: result.login,
            avatarUrl: result.avatar_url,
            repoUrl: result.html_url,
          };
          setUser([userObj]);
        } else {
          setUser([]);
        }
      })
      .catch((error) => console.log('error', error));
  }

  function handleUserPress(selectedUser) {
    navigation.navigate('UserDetails', { user: selectedUser });
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Digite o nome do usuário"
          style={styles.inputText}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.containerList} onPress={() => handleUserPress(item)}>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <Text style={styles.username}>{item.userName}</Text>
          </TouchableOpacity>
        )}
        data={user}
        keyExtractor={(item) => item?.id?.toString() || ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    width: 350,
    height: 50,
    borderRadius: 20,
    fontSize: 20,
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#4078c0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
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
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  username: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomePage;
