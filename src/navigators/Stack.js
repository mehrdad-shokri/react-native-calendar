import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import Header from '../components/Header';

import BottomTabs from './BottomTab';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabs}
        options={({route}) => {
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Inbox';
          return {headerTitle: routeName};
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
