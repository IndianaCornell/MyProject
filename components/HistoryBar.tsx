import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type HistoryBarProps = {
  title: string;
  description: string;
  date: string;
};

const HistoryBar: React.FC<HistoryBarProps> = ({title, description, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.description_title}>{title}</Text>
        <Text style={styles.description_text}>{description}</Text>
      </View>
      <Text style={styles.description_text}>{date}</Text>
    </View>
  );
};

export default HistoryBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 22,
  },
  description: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#EAF2FF',
  },
  description_title: {
    fontWeight: 600,
    fontSize: 16,
    color: '#3B57B2',
  },
  description_text: {
    fontSize: 14,
    color: '#494A50',
  },
});
