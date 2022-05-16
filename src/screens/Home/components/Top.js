import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png';

export default function Top() {
  return (
    <View style={styles.top}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>Olá, André</Text>
      <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});
