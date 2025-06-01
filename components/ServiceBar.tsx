import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import FilterIcon from '../assets/filter.svg';
import DoneIcon from '../assets/done.svg';

type ServiceBarProps = {
  title: string;
  description: string;
};

const ServiceBar: React.FC<ServiceBarProps> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.description_container}>
        <View style={styles.description}>
          <Text style={styles.description_title}>{title}</Text>
          <Text style={styles.description_text}>{description}</Text>
        </View>
        <FilterIcon width={40} height={40} />
      </View>
      <DoneIcon width={40} height={40} />
    </View>
  );
};

export default ServiceBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  description_container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#EAF2FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {},
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
