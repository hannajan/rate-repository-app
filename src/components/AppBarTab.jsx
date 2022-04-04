import { View } from 'react-native';
import theme from '../theme';
import Text from './Text';


const AppBarTab = ({ text }) => {

  const styles = {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  };

  return (
      <View>
            <Text style={styles}>{text}</Text>
      </View>
  );
};

export default AppBarTab;