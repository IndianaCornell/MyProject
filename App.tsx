import React, {createContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigation from './navigation/Navigation';
import ThemedStatusBar from './components/ThemedStatusBar';
import {Provider} from 'react-redux';
import {store} from './store';

export const ThemeContext = createContext();

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');
  const themeStyles = theme === 'light' ? styles.light : styles.dark;

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <View style={[styles.container, themeStyles]}>
          <ThemedStatusBar />
          <Navigation />
        </View>
      </ThemeContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#333',
  },
});

export default App;
