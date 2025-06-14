import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from '../App';

const ThemedStatusBar = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <StatusBar
      barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      backgroundColor={theme === 'light' ? '#fff' : '#111'}
    />
  );
};

export default ThemedStatusBar;
