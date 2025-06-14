import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#3B57B2',

    paddingVertical: 15,

    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default CustomButton;
