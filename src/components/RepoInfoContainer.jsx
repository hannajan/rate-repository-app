import { View, Dimensions } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = {
  headerContainer: {
    marginBottom: 10,
    marginLeft: 20,
    maxWidth: 280,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    padding: 2,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 3,
  },
}
const RepoInfoContainer = ({ fullName, description, language }) => {
  const screenWidth = Dimensions.get('window').width

  return (
    <View style={styles.headerContainer} >
      <Text fontSize='heading' fontWeight='bold' style={{ marginBottom: 3 }}>{fullName}</Text>
      <Text color='textSecondary' fontSize='subheading' style={{ marginBottom: 7, maxWidth: (screenWidth * 0.65) }}>{description}</Text>
      <View style={styles.languageTag}>
          <Text color='white'>{language}</Text>
      </View>
    </View>
  );
};

export default RepoInfoContainer;