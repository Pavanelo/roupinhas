import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/pages/home';
import Cart from './src/pages/cart';
import Product from './src/pages/product';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
          <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Product" component={Product} />

      </Tab.Navigator>
    </NavigationContainer>
  
  )
}
    