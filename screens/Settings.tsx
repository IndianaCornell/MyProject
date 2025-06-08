import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Setting: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userSettings}>
        <CustomButton title={'Мої Smart-пристрої'} />
        <CustomButton title={'Обслуговування'} />
        <CustomButton title={'Історія прибирань'} />
        <CustomButton title={'Обрати тему застосунку'} />
        <CustomButton title={'Особисті дані'} />
      </View>
      <View style={styles.suppCall}>
        <CustomButton title={'Звернення до підтримки'} />
        <CustomButton title={'Вийти з портфоліо'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#FDFAF6',
  },
  userSettings: {
    gap: 20,
  },
  suppCall: {
    gap: 20,
  },
});

export default Setting;
