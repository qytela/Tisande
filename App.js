import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Notification from './app/screens/Notification';
import Message from './app/screens/Message';
import Home from './app/screens/Home';
import Shop from './app/screens/Shop';
import Profile from './app/screens/Profile';

import UangJajan from './app/screens/UangJajan';

const AppBottomNavigator = createBottomTabNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' size={24} color={tintColor} />
        <Image source={require('./app/images/notif-icon.png')} style={{ width: 24, height: 24, tintColor: tintColor, marginTop: 6 }} />
      )
    }
  },
  Message: {
    screen: Message,
    navigationOptions: {
      tabBarLabel: 'Message',
      tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' size={24} color={tintColor} />
        <Image source={require('./app/images/message-icon.png')} style={{ width: 25, height: 24, tintColor: tintColor, marginTop: 6 }} />
      )
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' size={24} color={tintColor} />
        <Image source={require('./app/images/beranda-icon.png')} style={{ width: 27, height: 27, tintColor: tintColor, marginTop: 6 }} />
      )
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      tabBarLabel: 'Shop',
      tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' size={24} color={tintColor} />
        <Image source={require('./app/images/shop-icon.png')} style={{ width: 27, height: 24, tintColor: tintColor, marginTop: 8 }} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' size={24} color={tintColor} />
        <Image source={require('./app/images/profile-icon.png')} style={{ width: 24, height: 26, tintColor: tintColor, marginTop: 8 }} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#9EA9F0',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      height: hp('7%')
    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {
    screen: AppBottomNavigator
  },
  UangJajan: {
    screen: UangJajan
  }
}, {
  initialRouteName: 'Dashboard'
});

export default createAppContainer(AppSwitchNavigator);