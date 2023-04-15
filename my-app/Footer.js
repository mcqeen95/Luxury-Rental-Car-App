import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: 10,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#007aff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default Footer;