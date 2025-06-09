import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {getServices} from '../api/api';
import SvgFromUrl from '../components/SvgFromUrl';
import ServiceBar from '../components/ServiceBar';

const Service: React.FC = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };

    load();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Не вдалося завантажити сервісні дані</Text>
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
          <View style={styles.textContainer}>
            <ServiceBar
              title={item.title}
              description={item.description}
              status={item.status}
              icon={item.icon}
            />
          </View>
        </View>
      )}
    />
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
