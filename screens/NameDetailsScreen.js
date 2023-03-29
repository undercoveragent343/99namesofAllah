import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const NameDetailsScreen = ({ route }) => {
  const { name, meaning, arabicName, sound } = route.params;

  const playSound = async () => {
    const { sound: soundObject } = await Audio.Sound.createAsync(sound);
    await soundObject.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.meaning}>{meaning}</Text>
      <Text style={styles.arabicName}>{arabicName}</Text>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>Play Sound</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
  },
  meaning: {
    fontSize: 24,
    color: '#444',
    marginTop: 10,
  },
  arabicName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NameDetailsScreen;
