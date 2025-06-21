import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import BatteryIcon from '../assets/battery.svg';
import NotificationIcon from '../assets/notification.svg';
import {ThemeContext} from '../App';

type HeaderBarProps = {
  title: string;
};

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
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

  const styles = getStyles();

  return (
    <Animated.View style={animatedStyle}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <Text style={styles.title}>{title}</Text>
            <BatteryIcon width={40} height={40} />
          </View>
          <TouchableOpacity>
            <NotificationIcon width={40} height={40} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default HeaderBar;

const getStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 10,
    },
    title: {
      fontSize: 48,
      color: '#3B57B2',
      fontWeight: '600',
    },
  });
