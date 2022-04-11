import { useQuery } from '@apollo/client'
import { FlatList } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries'
import ReviewItem from '../RepositoryList/ReviewItem';
import ItemSeparator from '../ItemSeparator'

const MyReviews = () => {
  const { data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true }
  })

  const reviewNodes = data ? data.me.reviews.edges.map(edge => edge.node) : [];

  return (
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (<ReviewItem review={item} />)}
      />
  );
};

export default MyReviews;