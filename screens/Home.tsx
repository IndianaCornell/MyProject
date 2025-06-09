import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {getMap} from '../api/api';
import SvgFromUrl from '../components/SvgFromUrl';

const Home: React.FC = () => {
  const [map, setMap] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMap();
        setMap(data);
      } catch (e) {
        setError(true);
      }
    };

    load();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text>Не вдалося завантажити карту</Text>
      ) : map ? (
        <SvgFromUrl uri={map} width={400} height={400} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
