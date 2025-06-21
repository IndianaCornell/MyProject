import React, {createContext, useState} from 'react';

import Navigation from './navigation/Navigation';
import ThemedStatusBar from './components/ThemedStatusBar';
import {Provider} from 'react-redux';
import {store} from './store';
import ThemeAnimatedWrapper from './components/ThemeAnimatedWrapper';

export const ThemeContext = createContext();

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeAnimatedWrapper>
          <ThemedStatusBar />
          <Navigation />
        </ThemeAnimatedWrapper>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
