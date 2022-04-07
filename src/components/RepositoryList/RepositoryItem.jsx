import { View, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import RepoInfoContainer from './RepoInfoContainer';
import StatBar from './StatBar';
import GitHubButton from './GitHubButton';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.common.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: (screenWidth * 0.15),
    height: (screenWidth * 0.15),
    borderRadius: 5,
  },
});

const RepositoryItem = ({ item }) => (
  <View testID='repositoryItem' style={styles.container}>
    <Image
      style={styles.tinyLogo} 
      source={{ uri: item.ownerAvatarUrl }} 
    />
    <RepoInfoContainer fullName={item.fullName} description={item.description} language={item.language}/>
    <StatBar item={item} />
    {item.url && <GitHubButton url={item.url}/>}
  </View>
);

export default RepositoryItem
