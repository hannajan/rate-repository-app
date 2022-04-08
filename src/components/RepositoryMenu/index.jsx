import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { SORT_METHOD, SORT_ORDER } from '../../constants';
import { Menu, Button, Searchbar } from 'react-native-paper';
import { SORT_OPTIONS } from '../../constants';

const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  searchbar: {
    marginHorizontal: 10,
  }
});

const RepositoryMenu = ({
  setOrderBy,
  setOrderDirection,
  sortOption,
  setSortOption,
  searchQuery,
  setSearchQuery,
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handlePress = async (sort) => {
    setSortOption(sort);

    if (sort === SORT_OPTIONS.Highest) {
      setOrderBy(SORT_METHOD.Rating);
      setOrderDirection(SORT_ORDER.HighestFirst);
    } else if (sort === SORT_OPTIONS.Lowest) {
      setOrderBy(SORT_METHOD.Rating);
      setOrderDirection(SORT_ORDER.LowestFirst);
    } else if (sort === SORT_OPTIONS.Latest) {
      setOrderBy(SORT_METHOD.Latest);
      setOrderDirection();
    }
    closeMenu();
  };

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.menuContainer}>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} icon="menu-down">
            {sortOption}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => handlePress(SORT_OPTIONS.Latest)}
          title={SORT_OPTIONS.Latest}
        />
        <Menu.Item
          onPress={() => handlePress(SORT_OPTIONS.Highest)}
          title={SORT_OPTIONS.Highest}
        />
        <Menu.Item
          onPress={() => handlePress(SORT_OPTIONS.Lowest)}
          title={SORT_OPTIONS.Lowest}
        />
      </Menu>
    </View>
  );
};

export default RepositoryMenu;
