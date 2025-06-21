import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import {ThemeContext} from '../App';

type HeaderBarProps = {
  title: string;
};

const HeaderHistoryBar: React.FC<HeaderBarProps> = ({title}) => {
  const {theme} = useContext(ThemeContext);
  const progress = useSharedValue(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(theme === 'dark' ? 1 : 0, {duration: 400});
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['#fff', '#222']),
    borderBottomWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderHistoryBar;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: '#3B57B2',
    fontWeight: '600',
  },
});
