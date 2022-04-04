import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { View } from 'react-native';
import theme from '../theme'

const styles = StyleSheet.create({
  inputBox: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.colors.common.lightGrey,
    marginBottom: 10,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <View style={styles.inputBox}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;