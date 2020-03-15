import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';

import overlay from '../utils/overlay';
import Drawer from './Drawer';
import SettingsScreen from '../screens/Settings';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = props => {
/*
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Feed';
*/

  const theme = useTheme();
  // const safeArea = useSafeArea();
  // const isFocused = useIsFocused();

  let icon = 'feather';

/*
  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }
*/

  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="TaskList"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="TaskList"
          component={Drawer}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      {/*<Portal>
                <FAB
                    visible={isFocused}
                    icon={icon}
                    style={{
                        position: 'absolute',
                        bottom: safeArea.bottom + 65,
                        right: 16,
                    }}
                    color="white"
                    theme={{
                        colors: {
                            accent: theme.colors.primary,
                        },
                    }}
                    onPress={() => {}}
                />
            </Portal>*/}
    </React.Fragment>
  );
};

export default BottomTabs;
