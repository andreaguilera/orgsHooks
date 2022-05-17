import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {getTop, getProducers} from '../../../services/getData';
import logo from '../../../assets/logo.png';

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      subtitle: '',
    },
  };

  refreshTop() {
    const res = getTop();
    this.setState({top: res});
  }
  ComponentDidMount() {
    this.refreshTop();
  }

  render() {
    return (
      <View style={styles.top}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcome}>{this.state.top.welcome}</Text>
        <Text style={styles.subtitle}>{this.state.top.subtitle}</Text>
      </View>
    );
  }
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

export default Top;
