import { TextInput as NativeTextInput } from 'react-native';
import { View } from 'react-native';
import theme from '../theme'

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