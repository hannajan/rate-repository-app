import { View, Image, StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';
import RepoInfoContainer from './RepoInfoContainer';
import StatBar from './StatBar';
import Button from '../Button';

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
  buttonContainer: {
    flexGrow: 2,
    flexDirection: 'column',
  },
});

const RepositoryItem = ({ item, fullView = false }) => (
  <View testID='repositoryItem' style={styles.container}>
    <Image
      style={styles.tinyLogo} 
      source={{ uri: item.ownerAvatarUrl }} 
    />
    <RepoInfoContainer fullName={item.fullName} description={item.description} language={item.language}/>
    <StatBar item={item} />
    <View style={styles.buttonContainer}>
      {fullView && <Button style={styles.gitHubButton} url={item.url}/>}
    </View>
  </View>
);

export default RepositoryItem
