import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchCard from './src/components/pages/search-card';
import UserCard from './src/components/pages/user-card';


interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchCard searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listContainer: {
    flexGrow: 1,
  },
});
