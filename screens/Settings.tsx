import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {ThemeContext} from '../App';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

const Setting: React.FC = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const progress = useSharedValue(theme === 'dark' ? 1 : 0);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    progress.value = withTiming(theme === 'dark' ? 1 : 0, {duration: 400});
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ['#FDFAF6', '#222'],
    ),
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  }));

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Animated.View style={animatedStyle}>
      <View style={{gap: 20}}>
        <CustomButton title={'Мої Smart-пристрої'} />
        <CustomButton
          title={'Обслуговування'}
          onPress={() => navigation.navigate('Service')}
        />
        <CustomButton
          title={'Історія прибирань'}
          onPress={() => navigation.navigate('CleaningHistory')}
        />
        <CustomButton title={'Змінити тему застосунку'} onPress={toggleTheme} />
        <CustomButton title={'Особисті дані'} />
      </View>
      <View style={{gap: 20}}>
        <CustomButton title={'Звернення до підтримки'} />
        <CustomButton title={'Вийти з портфоліо'} />
      </View>
    </Animated.View>
  );
};

export default Setting;
