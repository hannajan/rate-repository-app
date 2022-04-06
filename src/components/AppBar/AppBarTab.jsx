import { View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';


const AppBarTab = ({ text }) => {

  const styles = {
    appBarText: {
      color: theme.colors.appBarText,
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.bold,
    },
    AppBarTab: {
      paddingHorizontal: 10,
    }
  };

  return (
      <View style={styles.AppBarTab}>
            <Text style={styles.appBarText}>{text}</Text>
      </View>
  );
};

export default AppBarTab;