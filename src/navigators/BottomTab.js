import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import overlay from '../utils/overlay';
import Drawer from './Drawer';
import SettingsScreen from '../screens/Settings';
import TaskListScreen from '../screens/TaskList';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = props => {
  const theme = useTheme();
  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="TaskList"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        backBehavior={'initialRoute'}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="TaskList"
          component={TaskListScreen}
          initialParams={{itemId: 42}}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FeatherIcons color={color} name={'check-square'} size={23} />
            ),
            tabBarLabel: 'InboxLabel',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'Settings',
            tabBarIcon: ({focused, color}) => (
              <FeatherIcons color={color} name={'settings'} size={23} />
            ),
            tabBarLabel: 'SeetingsLabel',
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
