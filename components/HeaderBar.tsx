import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import BatteryIcon from '../assets/battery.svg';
import NotificationIcon from '../assets/notification.svg';

type HeaderBarProps = {
  title: string;
};

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{title}</Text>
        <BatteryIcon width={40} height={40} />
      </View>
      <TouchableOpacity>
        <NotificationIcon width={40} height={40} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
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
    fontWeight: 600,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
