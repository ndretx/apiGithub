import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export default function UserCard({ user }: { user: User }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.login}</Text>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
    </View>
  );
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
});
