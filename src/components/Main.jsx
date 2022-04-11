import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import Repository from './RepositoryList/Repository';
import Review from './Review';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';
import theme from '../theme';
import MyReviews from './MyReviews'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroudMain,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='signIn' element={<SignIn />} exact />
        <Route path='repositories/:id' element={<Repository />} exact/>
        <Route path='review' element={<Review />} exact />
        <Route path='signUp' element={<SignUp />} exact />
        <Route path='myReviews' element={<MyReviews />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      
    </View>
  );
};

export default Main;
