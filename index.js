/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import RootNavigator from './src/navigators';
import {name as appName} from './app.json';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import FeatherIcons from 'react-native-vector-icons/SimpleLineIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

console.log(RNLocalize.getLocales());
console.log(RNLocalize.getCurrencies());

const AppWrapper = () => (
  <PaperProvider
    settings={{
      icon: props => <FeatherIcons {...props} />,
    }}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </PaperProvider>
);
AppRegistry.registerComponent(appName, () => AppWrapper);
