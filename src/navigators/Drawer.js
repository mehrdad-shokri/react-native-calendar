import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Stack from './Stack';
import DrawerContent from '../components/Drawer';

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name={'drawerStack'} component={Stack} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
