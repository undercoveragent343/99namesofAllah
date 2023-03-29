import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function IntroductionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to 99 Names of Allah</Text>
      <Text style={styles.text}>Discover the beautiful names of Allah and learn their meanings.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NameListScreen')}
      >
        <Text style={styles.buttonText}>View All Names</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MemorizationToolsScreen')}
      >
        <Text style={styles.buttonText}>Memorization Tools</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
