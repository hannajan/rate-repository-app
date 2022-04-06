import { Pressable, StyleSheet, View }from 'react-native';
import theme from '../../theme'
import Text from '../Text';

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    height: 50,
  },
  submitButtonText: {
    color: theme.colors.common.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 10,
  }
});

const FormButton = ({ error, text, ...props }) => {

  return (
    <View style={styles.submitButton}>
      <Pressable {...props}>
        <Text style={styles.submitButtonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default FormButton;