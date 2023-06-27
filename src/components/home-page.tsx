import React, { useState } from "react";
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

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState<GitEntity[]>([]);

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

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do usuário"
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSearch} />
      </View>
      <FlatList
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.username}>{item.userName}</Text>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
          </View>
        )}
        data={user}
        keyExtractor={(item) => item?.id?.toString() || ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },
});
