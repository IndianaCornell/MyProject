import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {getHistory} from '../api/api';
import HistoryBar from '../components/HistoryBar';

type CleaningHistoryProps = {};

const CleaningHistory: React.FC<CleaningHistoryProps> = ({}) => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };
    load();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Не вдалося завантажити історію</Text>
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
export default CleaningHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 24,
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
