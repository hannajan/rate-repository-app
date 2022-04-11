import { View, Pressable, StyleSheet } from 'react-native'
import * as Linking from 'expo-linking';

import theme from '../theme'
import Text from './Text';
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    marginHorizontal: 5,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexGrow: 3,
  },
  text: {
    color: theme.colors.common.white
  },
  colorRed: {
    backgroundColor: theme.colors.errorRed,
  },
  bigButton: {
    paddingHorizontal: 115,
  }
})

const Button = ({ color, url, text = 'Open in GitHub', repoView = true, action = false }) => {

  const buttonStyle = [
    styles.button,
    color === 'red' && styles.colorRed,
    repoView && styles.bigButton,
  ]

  const openLink = () => {
    if(url) {
      Linking.openURL(url);
    } else if(action) {
      action();
    } else {
      console.log('Button url missing')
    }
  };

  return (
    <View style={buttonStyle}>
      <Pressable onPress={openLink}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;