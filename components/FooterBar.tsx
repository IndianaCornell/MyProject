import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import SettingsIcon from '../assets/settings.svg';
import HomeIcon from '../assets/home.svg';
import ServiceIcon from '../assets/service.svg';

const FooterBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SettingsIcon width={55} height={55} />
      </TouchableOpacity>

      <TouchableOpacity>
        <HomeIcon width={55} height={55} />
      </TouchableOpacity>

      <TouchableOpacity>
        <ServiceIcon width={55} height={55} />
      </TouchableOpacity>
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
