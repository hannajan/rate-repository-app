import { useQuery } from '@apollo/client'
import { FlatList } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries'
import ReviewItem from '../RepositoryList/ReviewItem';
import ItemSeparator from '../ItemSeparator'
import { View, StyleSheet } from 'react-native'
import MyReviewButtons from './MyReviewButtons'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.common.white,
    paddingBottom: 15,
  }
})

const MyReviews = () => {
  const { data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true }
  })

  const reviewNodes = data ? data.me.reviews.edges.map(edge => edge.node) : [];

  return (
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
        <View style={styles.container}>
          <ReviewItem review={item} myReview={true}/>
          <MyReviewButtons url={item.repository.url} reviewId={item.id}/>
        </View>
        )}
      />
  );
};

export default MyReviews;