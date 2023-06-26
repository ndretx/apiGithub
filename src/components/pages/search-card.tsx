import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
      <Button title="Pesquisar" onPress={handleSearch} />
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
  },
});
