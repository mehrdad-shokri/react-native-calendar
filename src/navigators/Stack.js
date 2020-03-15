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
        options={({route}) => {
          let title;
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : route.params && route.params.screen
            ? route.params.screen
            : 'TaskList';
          switch (routeName) {
            case 'TaskList':
              title = 'Tasks screen';
              break;
            case 'Settings':
              title = 'Settings screen';
              break;
            default:
              return routeName;
          }
          return {headerTitle: title, routeName};
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
