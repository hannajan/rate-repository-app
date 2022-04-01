import { View, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const AppBarTab = ({ text }) => {

  const styles = {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  };

  return (
    <View>
      <Pressable onPress={() => console.log('tab pressed')}>
        <Text style={styles}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;