import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BatteryIcon from '../assets/battery.svg';
import NotificationIcon from '../assets/notification.svg';
import {ThemeContext} from '../App';

type HeaderBarProps = {
  title: string;
};

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
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
  );
};

export default HeaderBar;

const getStyles = (theme: string) =>
  StyleSheet.create({
    safeArea: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      borderBottomWidth: 0.5,
    },
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
