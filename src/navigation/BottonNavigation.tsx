import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExchangesScreen from '../screens/ExchangesScreen';
import HomeScreen from '../screens/HomeScreen';
import { View , StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
 
  
  return (

        <Tab.Navigator
          initialRouteName="Home"
          sceneContainerStyle={{padding: 2}}
          screenOptions={{
            tabBarActiveTintColor: '#5ac2db',
          }}
        >
          <Tab.Screen
            name="Coins"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Coins',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bitcoin"  color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Exchanges"
            component={ExchangesScreen}
            options={{
              tabBarLabel: 'Exchange',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="exchange" color={color} size={size} />
              ),
              //tabBarBadge: 3,
            }}
          />
        </Tab.Navigator>

  )
}

export default BottomNavigation

