import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import Text from '../Text'
import { GET_REPOSITORY } from '../../graphql/queries'

import RepositoryItem from './RepositoryItem';

const Repository = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <RepositoryItem item={data.repository} />
  );
};

export default Repository;