import React from 'react';
import {Text, View} from 'react-native';
import translations from '../utils/translation'

const TaskList = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Task list Screen</Text>
      <Text>{translations.hello}</Text>
    </View>
  );
};

export default TaskList;
