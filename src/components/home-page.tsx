import React, { useState } from "react"
import { Text, TextInput, TouchableHighlight, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import GitEntiy from "../entity/git-entities"
import { Image } from 'expo-image'


export default function HomePage() {

    const [user, setUser] = useState<GitEntiy[]>([])
    function handleSearch(event) {
        var requestOptions = {
            method: 'GET',

        };

        fetch("https://api.github.com/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                const userList: GitEntiy[] = result.map(item => ({
                    userName: item.login,
                    avatarUrl: item.avatar_url,
                    repoUrl: item.repo_url,
                }));
                setUser(userList)
            })
            .catch(error => console.log('error', error));
    }

    return (

        <View style={styles.container}>
            <TextInput
                placeholder="Digite o nome do usuário"
                style={styles.input}
                onChange={handleSearch}
            />
            <View>
                <TouchableOpacity style={styles.button} onPress={handleSearch} />
            </View>
            <FlatList renderItem={({ item }) => (
                <View style={styles.container}>
                    <Text style={styles.username}>{item.userName}</Text>
                    <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
                </View>
            )}
                data={user}
                keyExtractor={item => item.userName}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 8,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
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
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 8,
        paddingHorizontal: 8,
        color: '"000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'blue',
        width: 50,
        height: 50,

    }
});


