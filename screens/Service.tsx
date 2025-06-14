import React, {useContext, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchServices} from '../slices/serviceSlice';
import {ThemeContext} from '../App';
import ServiceBar from '../components/ServiceBar';
import {RootState, AppDispatch} from '../store';

const Service: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const {
    list: services,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const styles = getStyles(theme);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={theme === 'light' ? '#000' : '#fff'}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Не вдалося завантажити сервісні дані</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={services}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <ServiceBar
            title={item.title}
            description={item.description}
            status={item.status}
            icon={item.icon}
          />
        </View>
      )}
    />
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      gap: 20,
      padding: 20,
      flex: 1,
      backgroundColor: theme === 'light' ? '#fff' : '#222',
    },
    text: {
      color: theme === 'light' ? '#000' : '#fff',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
  });

export default Service;
