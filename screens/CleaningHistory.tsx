import React, {useContext, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHistory} from '../slices/historySlice';
import {ThemeContext} from '../App';
import HistoryBar from '../components/HistoryBar';
import {RootState, AppDispatch} from '../store';

const CleaningHistory: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();

  const {
    list: history,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.history);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  const styles = getStyles(theme);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={theme === 'light' ? '#000' : '#fff'}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Не вдалося завантажити історію</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={history}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.list}>
          <HistoryBar
            title={item.title}
            description={item.description}
            date={item.date}
            icon={item.icon}
          />
        </View>
      )}
    />
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 20,
      padding: 24,
      backgroundColor: theme === 'light' ? '#fff' : '#222',
    },
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
