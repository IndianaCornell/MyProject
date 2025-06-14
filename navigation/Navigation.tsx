import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../App';

import Home from '../screens/Home';
import Service from '../screens/Service';
import Setting from '../screens/Settings';
import CleaningHistory from '../screens/CleaningHistory';

import HeaderBar from '../components/HeaderHomeBar';
import HeaderServiceBar from '../components/HeaderServiceBar';
import HeaderHistoryBar from '../components/HeaderHistoryBar';

import SettingsIcon from '../assets/settings.svg';
import HomeIcon from '../assets/home.svg';
import ServiceIcon from '../assets/service.svg';
import Calendar from '../assets/calendar.svg';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  const tabBarBackground = theme === 'light' ? '#FAF1E6' : '#222';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
            paddingTop: 10,
            backgroundColor: tabBarBackground,
          },
        }}>
        <Tab.Screen
          name="Service"
          component={Service}
          options={{
            header: () => <HeaderServiceBar title="Цезар" />,
            tabBarIcon: () => <ServiceIcon width={40} height={40} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <HeaderBar title="Цезар" />,
            tabBarIcon: () => <HomeIcon width={40} height={40} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            header: () => <HeaderBar title="Цезар" />,
            tabBarIcon: () => <SettingsIcon width={40} height={40} />,
          }}
        />
        <Tab.Screen
          name="CleaningHistory"
          component={CleaningHistory}
          options={{
            header: () => <HeaderHistoryBar title="Цезар" />,
            tabBarIcon: () => <Calendar width={40} height={40} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
