import * as yup from 'yup';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import FormButton from '../FormButton';
import useSignUp from '../../hooks/useSignUp'
import useSignIn from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.common.white,
    padding: 10,
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'center',
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput
        secureTextEntry
        name="passwordConfirm"
        placeholder="Password confirmation"
      />
      <FormButton onPress={onSubmit} text="Sign up" />
    </View>
  );
};

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character long')
    .max(30, 'Username must be between 1 and 50 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be between 5 and 50 characters long')
    .max(50, 'Password must be between 5 and 50 characters long')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password confirmation must match password')
    .required('Password confirmation is required'),
});

const SignUp = () => {
  const [createUser] = useSignUp();
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values
  
    try {
      const data = await createUser({ username, password });
      const signInData = await signIn({ username: data.username, password });
      if(signInData.authenticate.accessToken) {
        navigate('/', { replace: true })
      }
    } catch (e) {
      console.log(e.message);
    }

  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;
