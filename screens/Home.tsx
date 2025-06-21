import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {getMap} from '../api/api';
import SvgFromUrl from '../components/SvgFromUrl';
import {ThemeContext} from '../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setPower, setMoisture} from '../slices/cleaningSlice';

const Home: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const [map, setMap] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const power = useSelector((state: RootState) => state.cleaning.power);
  const moisture = useSelector((state: RootState) => state.cleaning.moisture);

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

  const renderOption = (
    label: string,
    value: string,
    selected: boolean,
    onPress: () => void,
  ) => (
    <Pressable
      onPress={onPress}
      style={[styles.option, selected && styles.optionSelected]}>
      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.text}>Не вдалося завантажити карту</Text>
      ) : map ? (
        <SvgFromUrl uri={map} width={350} height={350} />
      ) : (
        <ActivityIndicator color={theme === 'light' ? '#000' : '#fff'} />
      )}

      <View style={styles.controls}>
        <Text style={styles.sectionTitle}>Потужність</Text>
        <View style={styles.optionsRow}>
          {renderOption('Еко', 'eco', power === 'eco', () =>
            dispatch(setPower('eco')),
          )}
          {renderOption('Середня', 'medium', power === 'medium', () =>
            dispatch(setPower('medium')),
          )}
          {renderOption('Посилена', 'strong', power === 'strong', () =>
            dispatch(setPower('strong')),
          )}
        </View>

        <Text style={styles.sectionTitle}>Рівень вологості</Text>
        <View style={styles.optionsRow}>
          {renderOption('Низький', 'low', moisture === 'low', () =>
            dispatch(setMoisture('low')),
          )}
          {renderOption('Середній', 'medium', moisture === 'medium', () =>
            dispatch(setMoisture('medium')),
          )}
          {renderOption('Високий', 'high', moisture === 'high', () =>
            dispatch(setMoisture('high')),
          )}
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Запустити прибирання</Text>
        </Pressable>
      </View>
    </View>
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: theme === 'light' ? '#fff' : '#222',
    },
    text: {
      color: theme === 'light' ? '#000' : '#fff',
    },
    controls: {
      width: '100%',
      padding: 20,
      alignItems: 'center',
      gap: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme === 'light' ? '#000' : '#fff',
      marginTop: 10,
      marginBottom: 5,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      gap: 10,
    },
    option: {
      width: 100,
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    optionSelected: {
      backgroundColor: '#007bff',
    },
    optionText: {
      color: '#000',
    },
    optionTextSelected: {
      color: '#fff',
      fontWeight: 'bold',
    },
    button: {
      marginTop: 20,
      backgroundColor: '#007bff',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default Home;
