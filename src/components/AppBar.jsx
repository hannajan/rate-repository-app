import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 100,
    padding: 15,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Link to='/'>
      <AppBarTab text='Repositories'/>
    </Link>
    <Link to='signIn'>
      <AppBarTab text='Sign in' />
    </Link>
  </View>
  );
};

export default AppBar;