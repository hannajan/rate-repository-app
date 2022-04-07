import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import Text from '../Text'
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

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const reviews = data.repository.reviews.edges.map(edge => edge.node)
  

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
    />
  )
};

export default Repository;