import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 10,
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to='/'>
        <AppBarTab text='Repositories'/>
      </Link>
      <Link to='signIn'>
        <AppBarTab text='Sign in' />
      </Link>
    </ScrollView>
  </View>
  );
};

export default AppBar;