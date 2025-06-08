import React from 'react';
import {View, StyleSheet} from 'react-native';
import HistoryBar from '../components/HistoryBar';

const CleaningHistory = () => {
  return (
    <View style={styles.container}>
      <HistoryBar
        title="Сухе прибирання"
        description="Прибрано усю квартиру"
        date="12/04/2025"
      />
      <HistoryBar
        title="Вологе прибирання"
        description="Прибрано вітальню та кухню"
        date="12/04/2025"
      />
      <HistoryBar
        title="Сухе прибирання"
        description="Прибрано усю квартиру"
        date="12/04/2025"
      />
    </View>
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
});
