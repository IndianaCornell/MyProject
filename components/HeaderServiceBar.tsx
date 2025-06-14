import {ThemeContext} from '../App';
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type HeaderBarProps = {
  title: string;
};

const HeaderServiceBar: React.FC<HeaderBarProps> = () => {
  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Обслуговування</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderServiceBar;

const getStyles = (theme: string) =>
  StyleSheet.create({
    safeArea: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      borderBottomWidth: 0.5,
    },
    title: {
      fontSize: 48,
      color: '#3B57B2',
      fontWeight: 600,
    },
  });
