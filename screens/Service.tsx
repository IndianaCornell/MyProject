import React, {useContext, useEffect, useMemo, useCallback, memo} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fetchServices} from '../slices/serviceSlice';
import {ThemeContext} from '../App';
import {RootState, AppDispatch} from '../store';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import ServiceBar from '../components/ServiceBar';

const MemoizedServiceBar = memo(ServiceBar);

const Service: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();

  const {
    list: services,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.services, shallowEqual);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const progress = useSharedValue(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(theme === 'dark' ? 1 : 0, {duration: 400});
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['#fff', '#222']),
    flex: 1,
    padding: 20,
  }));

  const styles = useMemo(() => getStyles(theme), [theme]);

  const renderItem = useCallback(
    ({item}: {item: any}) => (
      <View style={styles.item}>
        <MemoizedServiceBar
          title={item.title}
          description={item.description}
          status={item.status}
          icon={item.icon}
        />
      </View>
    ),
    [styles.item],
  );

  if (isLoading) {
    return (
      <Animated.View style={animatedStyle}>
        <ActivityIndicator
          size="large"
          color={theme === 'light' ? '#000' : '#fff'}
        />
      </Animated.View>
    );
  }

  if (error) {
    return (
      <Animated.View style={animatedStyle}>
        <Text style={styles.text}>Не вдалося завантажити сервісні дані</Text>
      </Animated.View>
    );
  }

  return (
    <Animated.FlatList
      contentContainerStyle={{gap: 20}}
      style={animatedStyle}
      data={services}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    text: {
      color: theme === 'light' ? '#000' : '#fff',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
  });

export default Service;
