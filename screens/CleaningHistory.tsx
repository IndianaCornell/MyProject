import React, {useContext, useEffect, useMemo, useCallback} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fetchHistory} from '../slices/historySlice';
import {ThemeContext} from '../App';
import HistoryBar from '../components/HistoryBar';
import {RootState, AppDispatch} from '../store';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const MemoizedHistoryBar = React.memo(HistoryBar);

const CleaningHistory: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();

  const {
    list: history,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.history, shallowEqual);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  const progress = useSharedValue(theme === 'dark' ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(theme === 'dark' ? 1 : 0, {duration: 400});
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['#fff', '#222']),
    flex: 1,
    padding: 24,
  }));

  const styles = useMemo(() => getStyles(theme), [theme]);

  const renderItem = useCallback(
    ({item}: any) => (
      <View style={styles.list}>
        <MemoizedHistoryBar
          title={item.title}
          description={item.description}
          date={item.date}
          icon={item.icon}
        />
      </View>
    ),
    [styles.list],
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
        <Text style={styles.text}>Не вдалося завантажити історію</Text>
      </Animated.View>
    );
  }

  return (
    <Animated.FlatList
      contentContainerStyle={{gap: 20}}
      style={animatedStyle}
      data={history}
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
    list: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
  });

export default CleaningHistory;
