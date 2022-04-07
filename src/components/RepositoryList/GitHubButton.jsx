import { View, Pressable, StyleSheet } from 'react-native'
import * as Linking from 'expo-linking';

import theme from '../../theme'
import Text from '../Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    marginLeft: 5,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 115,
    paddingRight: 115,
  },
  text: {
    color: theme.colors.common.white
  }
})

const GitHubButton = ({ url }) => {

  const openGitHubLink = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.button}>
      <Pressable onPress={openGitHubLink}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.text}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default GitHubButton;