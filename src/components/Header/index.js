import React from 'react';
import {
  Appbar,
  Avatar,
  useTheme,
  Button,
  TouchableRipple,
  IconButton,
} from 'react-native-paper';
import {DrawerActions} from '@react-navigation/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TouchableNativeFeedback, TouchableOpacity} from 'react-native';

const Header = ({scene, previous, navigation}) => {
  console.log('appbar', scene);
  const theme = useTheme();
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackActionr
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        options.routeName === 'TaskList' && (
          <Appbar.Action icon={'menu'} onPress={navigation.openDrawer} />
        )
      )}

      <Appbar.Content
        title={title}
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          color: theme.colors.text,
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
