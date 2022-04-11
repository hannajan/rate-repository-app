import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useDebounce } from 'use-debounce';
import RepositoryMenu from '../RepositoryMenu';
import { useNavigate } from 'react-router-native';
import { SORT_METHOD, SORT_OPTIONS } from '../../constants';
import ItemSeparator from '../ItemSeparator';

export const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
  sortOption,
  setSortOption,
  searchQuery,
  setSearchQuery,
  onEndReached,
}) => {
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const onPress = (id) => {
    navigate(`../repositories/${id}`, { replace: true });
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={
        <RepositoryMenu
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
          sortOption={sortOption}
          setSortOption={setSortOption}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState(SORT_METHOD.Created);
  const [orderDirection, setOrderDirection] = useState();
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.Latest);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 1000);
  const { repositories, fetchMore } = useRepositories({
    first: 8,
    orderBy,
    orderDirection,
    searchKeyword,
  });

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      sortOption={sortOption}
      setSortOption={setSortOption}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;
