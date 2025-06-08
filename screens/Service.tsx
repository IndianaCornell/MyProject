import {View, StyleSheet} from 'react-native';
import ServiceBar from '../components/ServiceBar';

const Service: React.FC = () => {
  return (
    <View style={styles.container}>
      <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
      <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
      <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
      <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
      <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    flex: 1,
    backgroundColor: '#FDFAF6',
  },
});

export default Service;
