import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Feed } from './feed';
import { Details } from './details';

export const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerTitle: 'Twitter'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Tweet'}}
      />
    </Stack.Navigator>
  );
};
