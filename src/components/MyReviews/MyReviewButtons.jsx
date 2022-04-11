import { View, StyleSheet, Alert } from 'react-native'
import Button from '../Button';
import useReview from '../../hooks/useReview';

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
})

const deleteHandler = ({ reviewId, deleteReview }) => {

  const cancelAlert = () => {
  };

  const confirmAlert = async () => {
    try {
      await deleteReview({ id: reviewId });
    } catch (e) {
      console.log(e)
    }
  };

  Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
    {
      text: 'Cancel',
      onPress: cancelAlert,
      style: 'cancel',
    },
    { text: 'Delete', onPress: confirmAlert},
  ]);

}

const MyReviewButtons = ({ url, reviewId }) => {
  const { deleteReview } = useReview();

  return (
    <View style={styles.buttonContainer}>
      <Button text='View repository' repoView={false} url={url}/>
      <Button text='Delete review' color='red' repoView={false} action={() => deleteHandler({reviewId, deleteReview})}/>
    </View>
  );
};

export default MyReviewButtons;