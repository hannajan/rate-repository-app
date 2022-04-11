import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.common.white,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    padding: 5,
    maxWidth: 300,
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2.5,
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  }
})

const ReviewItem = ({ review, myReview = false }) => {

  const date = format(new Date(review.createdAt), 'do MMMM yyyy')

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color='primary' fontSize='heading' fontWeight='bold'>{review.rating}</Text>
      </View>
      <View style={styles.textContainer}>
        { !myReview 
          ? <Text fontWeight='bold' fontSize='subheading'>{review.user.username}</Text>
          : <Text fontWeight='bold' fontSize='subheading'>{review.repository.fullName}</Text>
        }
        <Text color='textSecondary'>{date}</Text>
          <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;