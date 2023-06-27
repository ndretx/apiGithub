import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

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

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    
  },
  input: {
    height: 30,
    width: 250,
    borderRadius: 30,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    color: '"000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  button: {
    padding: 8,
    borderRadius: 30,
    backgroundColor: '#FFF',
    width: 60,
    height: 30,

  },

  buttonText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
