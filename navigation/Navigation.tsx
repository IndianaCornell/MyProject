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

const ServiceHeader = () => <HeaderServiceBar title="Цезар" />;
const HomeHeader = () => <HeaderBar title="Цезар" />;
const SettingsHeader = () => <HeaderBar title="Цезар" />;
const HistoryHeader = () => <HeaderHistoryBar title="Цезар" />;

const RenderServiceIcon = () => <ServiceIcon width={40} height={40} />;
const RenderHomeIcon = () => <HomeIcon width={40} height={40} />;
const RenderSettingsIcon = () => <SettingsIcon width={40} height={40} />;
const RenderCalendarIcon = () => <Calendar width={40} height={40} />;

const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
            paddingTop: 10,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}>
        <Tab.Screen
          name="Service"
          component={Service}
          options={{
            header: ServiceHeader,
            tabBarIcon: RenderServiceIcon,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            header: HomeHeader,
            tabBarIcon: RenderHomeIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Setting}
          options={{
            header: SettingsHeader,
            tabBarIcon: RenderSettingsIcon,
          }}
        />
        <Tab.Screen
          name="CleaningHistory"
          component={CleaningHistory}
          options={{
            header: HistoryHeader,
            tabBarIcon: RenderCalendarIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
