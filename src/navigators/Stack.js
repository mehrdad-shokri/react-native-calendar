import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import Header from '../components/Header';
import BottomTabs from './BottomTab';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      headerMode="screen"
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={({route, navigation}) => {
          console.log('get bottom tab title', route, navigation)
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'NOTITLE';
          return {headerTitle: routeName};
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
