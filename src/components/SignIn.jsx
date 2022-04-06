import * as yup from 'yup';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import theme from '../theme'
import FormikTextInput from './FormikTextInput';
import FormButton from './FormButton';
import useSignIn from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password too short. Min length 5 characters')
    .required('Password is required')
});

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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <View style={styles.container}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;