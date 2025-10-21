import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FindIdScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <Button title="Find ID" onPress={() => { /* TODO: Handle find ID */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
