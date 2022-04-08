import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import RepositoryMenu from '../RepositoryMenu';
import { useNavigate } from 'react-router-native';
import Text from '../Text';
import { SORT_METHOD, SORT_OPTIONS } from '../../constants';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setOrderBy, setOrderDirection, sortOption, setSortOption }) => {
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const onPress = (id) => {
    navigate(`../repositories/${id}`, { replace: true });
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>  (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={<RepositoryMenu setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} sortOption={sortOption} setSortOption={setSortOption}/>}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState(SORT_METHOD.Created);
  const [orderDirection, setOrderDirection] = useState();
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.Latest);
  const { repositories, loading } = useRepositories(orderBy, orderDirection);

  if(loading) return <Text>Loading...</Text>

  return <RepositoryListContainer 
    repositories={repositories} 
    setOrderBy={setOrderBy} 
    setOrderDirection={setOrderDirection}
    sortOption={sortOption}
    setSortOption={setSortOption}  
  />;
};

export default RepositoryList;