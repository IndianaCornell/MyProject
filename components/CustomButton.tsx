import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Мої smart-пристрої</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#3B57B2',

    paddingVertical: 17,
    paddingHorizontal: 101,

    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default CustomButton;
