import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import GitEntity from "../entity/git-entities";
import UserDetailsPage from "./user-detail-page";


export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState<GitEntity[]>([]);
  const [selectedUser, setSelectedUser] = useState<GitEntity | null>(null);

  function handleSearch() {
    if (searchText.trim() === "") {
      setUser([]);
      return;
    }

    const requestOptions = {
      method: "GET",
    };

    fetch(`https://api.github.com/users/${searchText}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.login) {
          const userObj: GitEntity = {
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
      .catch((error) => console.log("error", error));
  }

  function handleUserPress(selectedUser: GitEntity) {
    setSelectedUser(selectedUser);
  }

  if (selectedUser) {
    return <UserDetailsPage user={selectedUser} />;
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
          <Entypo name="magnifying-glass" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerList}
            onPress={() => handleUserPress(item)}
          >
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <Text style={styles.username}>{item.userName}</Text>
          </TouchableOpacity>
        )}
        data={user}
        keyExtractor={(item) => item?.id?.toString() || ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    backgroundColor: "#333",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#f5f5f5',
    width: 'auto',
    borderRadius: 20,
    fontSize: 20,
  },
  inputText: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#4078c0",
    width: 80,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerList: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#333',
    borderColor: '#fafafa',
    borderWidth: 0.5,
    width: 'auto',
    borderRadius: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#4078c0",
  },
  avatar: {
    marginHorizontal: 20,
    marginVertical: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
