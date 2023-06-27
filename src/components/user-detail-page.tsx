import React from "react";
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import GitEntity from "../entity/git-entities";
import {Image} from 'expo-image'

interface UserDetailsPageProps {
  user: GitEntity;
}

export default function UserDetailsPage({ user }: UserDetailsPageProps) {
  const [searchRepoText, setSearchRepoText] = React.useState("");
  const [repos, setRepos] = React.useState<string[]>([]);

  const handleSearchRepo = () => {
    if (searchRepoText.trim() === "") {
      setRepos([]);
      return;
    }

    const requestOptions = {
      method: "GET",
    };

    fetch(user.repoUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const repoList = result.map((repo: any) => repo.name);
        setRepos(repoList);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.userName}</Text>
        <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Digite o nome do repositório"
          style={styles.inputText}
          value={searchRepoText}
          onChangeText={(text) => setSearchRepoText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearchRepo}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={repos}
        renderItem={({ item }) => <Text style={styles.repoName}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    backgroundColor: "#333",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
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
    width: 100,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  repoName: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
  },
});
