import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import React, {useContext} from 'react';
import {ThemeContext} from '../App';

const Setting: React.FC = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.userSettings}>
        <CustomButton title={'Мої Smart-пристрої'} />
        <CustomButton title={'Обслуговування'} />
        <CustomButton title={'Історія прибирань'} />
        <CustomButton title={'Змінити тему застосунку'} onPress={toggleTheme} />
        <CustomButton title={'Особисті дані'} />
      </View>
      <View style={styles.suppCall}>
        <CustomButton title={'Звернення до підтримки'} />
        <CustomButton title={'Вийти з портфоліо'} />
      </View>
    </View>
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'space-between',
      flex: 1,
      backgroundColor: theme === 'light' ? '#FDFAF6' : '#222',
    },
    userSettings: {
      gap: 20,
    },
    suppCall: {
      gap: 20,
    },
  });

export default Setting;
