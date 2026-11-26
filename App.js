import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Мій перший мобільний застосунок
      </Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Нікіта Криловець</Text>
      <Text style={styles.group}>Група: IT-31</Text>

      <Text style={styles.description}>
        Це мій перший мобільний застосунок, створений
        за допомогою React Native та Expo.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Вітаю!', 'Ви створили свій перший застосунок!')}
      >
        <Text style={styles.buttonText}>Привітатися</Text>
      </Pressable>

      <Pressable
        style={styles.secondButton}
        onPress={() => Alert.alert(
            'Про застосунок',
            'Цей застосунок створено в рамках практичної роботи з React Native та Expo.'
          )
        }
      >
        <Text style={styles.buttonText}>Про застосунок</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A5276',
    textAlign: 'center',
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },

  group: {
    fontSize: 18,
    color: '#2874A6',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#2980B9',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },

  secondButton: {
    backgroundColor: '#27AE60',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});