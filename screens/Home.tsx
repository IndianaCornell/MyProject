import React, {useContext, useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {getMap} from '../api/api';
import SvgFromUrl from '../components/SvgFromUrl';
import {ThemeContext} from '../App';

const Home: React.FC = () => {
  const {theme} = useContext(ThemeContext);
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

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.text}>Не вдалося завантажити карту</Text>
      ) : map ? (
        <SvgFromUrl uri={map} width={400} height={400} />
      ) : (
        <ActivityIndicator color={theme === 'light' ? '#000' : '#fff'} />
      )}
    </View>
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      paddingTop: 20,
      alignItems: 'center',
      flex: 1,
      backgroundColor: theme === 'light' ? '#fff' : '#222',
    },
    text: {
      color: theme === 'light' ? '#000' : '#fff',
    },
  });

export default Home;
