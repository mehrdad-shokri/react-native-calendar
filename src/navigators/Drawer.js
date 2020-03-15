import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import InboxScreen from '../screens/TaskList';
import DrawerContent from '../components/Drawer';

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="TaskList" component={InboxScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
