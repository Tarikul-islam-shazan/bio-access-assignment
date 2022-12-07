import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const SendButton = ({handleChat}) => {
  return (
    <TouchableOpacity onPress={handleChat} style={styles.button}>
      <Text> Send</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    margin: 0,
    padding: 0,
    marginLeft: 16,
    marginRight: 0,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeff',
  },
});

export default SendButton;
