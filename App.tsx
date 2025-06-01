import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from './components/CustomButton';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import ServiceBar from './components/ServiceBar';
import HistoryBar from './components/HistoryBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <HeaderBar title="Цезар" />
        <CustomButton title="Мої smart-пристрої" />
        <FooterBar />
        <ServiceBar title="Очищення фільтра" description="Стан чудовий" />
        <HistoryBar
          title="Сухе/вологе прибирання"
          description="Прибрано усі приміщення."
          date="03/09/25"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 24,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
