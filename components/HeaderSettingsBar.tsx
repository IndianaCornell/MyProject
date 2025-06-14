import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type HeaderBarProps = {
  title: string;
};

const HeaderServiceBar: React.FC<HeaderBarProps> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Обслуговування</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderServiceBar;

const styles = StyleSheet.create({
  safeArea: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FAF1E6',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 48,
    color: '#3B57B2',
    fontWeight: 600,
  },
});
