import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    height: 100,
    justifyContent: 'flex-end',
    padding: 15,
    paddingBottom: 20

  },
  //...
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <AppBarTab text='Repositories'/>
  </View>
  );
};

export default AppBar;