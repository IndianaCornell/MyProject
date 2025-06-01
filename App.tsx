import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from './components/CustomButton';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <HeaderBar />
        <CustomButton />
        <FooterBar />
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
