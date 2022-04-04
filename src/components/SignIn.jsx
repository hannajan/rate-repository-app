import { Formik } from 'formik';
import { StyleSheet, View, Pressable } from 'react-native';
import theme from '../theme'
import FormikTextInput from './FormikTextInput';
import FormButton from './FormButton';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.common.white,
    padding: 10,
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput secureTextEntry name='password' placeholder='Password' />
      <FormButton onPress={onSubmit} text='Sign in' />
    </View>
  );
};


const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;