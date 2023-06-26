import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface SearchCardProps {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  handleSearch: () => void;
}

export default function SearchCard({ searchTerm, setSearchTerm, handleSearch }: SearchCardProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do usuário"
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSearch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
