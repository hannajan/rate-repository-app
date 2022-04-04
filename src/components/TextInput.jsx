import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { View } from 'react-native';
import theme from '../theme'

const styles = StyleSheet.create({

});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  if(error) {
    textInputStyle.push({ borderColor: theme.colors.errorRed, marginBottom: 0 })
  }

  return (
    <View style={textInputStyle}>
      <NativeTextInput {...props} />
    </View>
  );
};

export default TextInput;