import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab'

import { GET_CURRENT_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client'
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const result = useQuery(GET_CURRENT_USER);
  let currentUser = null
  if(! result.loading) {
    currentUser = result.data.me
  }

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to='/'>
        <AppBarTab text='Repositories'/>
      </Link>
      {currentUser && 
      <Link to='review'>
          <AppBarTab text='Create a review' />
      </Link>}
      {currentUser 
        ? <Pressable onPress={handleSignOut}>
            <AppBarTab text='Sign out' />
          </Pressable>
        : 
          <Link to='signIn'>
            <AppBarTab text='Sign in' />
          </Link>
      }
      {!currentUser && 
        <Link to='signUp'>
          <AppBarTab text='Sign up' />
        </Link>
      }
    </ScrollView>
  </View>
  );
};

export default AppBar;