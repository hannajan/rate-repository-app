import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../FormikTextInput';
import FormButton from '../FormButton';
import useCreateReview from '../../hooks/useCreateReview'
import { useNavigate } from 'react-router-native';

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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be a number between 0 and 100')
    .max(100, 'Rating must be a number between 0 and 100')
    .required('Rating is required'),
    text: yup
      .string()
})

const ReviewForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline={true}/>
      <FormButton onPress={onSubmit} text='Create a review' />
    </View>
  )

}

const Review = () => {
  const [createReview] = useCreateReview();
  let navigate = useNavigate();


  const onSubmit = async (values) => {
    const reviewInput = {
      ...values,
      rating: Number(values.rating)
    }
    
    try {
      const data = await createReview(reviewInput);
      console.log(data.repositoryId)
      navigate(`/repositories/${data.repositoryId}`)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;
