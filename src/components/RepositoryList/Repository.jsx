import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../../graphql/queries'

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import { FlatList, StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
  repoInfoContainer: {
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {

  return (
    <View style={styles.repoInfoContainer}>
      <RepositoryItem item={repository} />
    </View>
  );
};

const Repository = () => {
  const { id } = useParams();
  let variables = {
    repositoryId: id,
    first: 4,
  }

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  
  let reviews = data?.repository.reviews.edges.map(edge => edge.node)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if(!canFetchMore) return;

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      }
    })
  }

  const onEndReach = () => {
    handleFetchMore();
  }

  if(!data) return null;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
};

export default Repository;