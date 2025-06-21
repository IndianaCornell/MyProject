import React, {useContext, useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import {ThemeContext} from '../App';

const ThemeAnimatedWrapper = ({children}: {children: React.ReactNode}) => {
  const {theme} = useContext(ThemeContext);
  const progress = useSharedValue(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(theme === 'dark' ? 1 : 0, {duration: 400});
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['#fff', '#222']),
    flex: 1,
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default ThemeAnimatedWrapper;
