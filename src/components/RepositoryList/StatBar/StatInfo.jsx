import { View } from 'react-native';
import Text from '../../Text';

const StatInfo = ({ name, count }) => {

  const styles = {
    stat: {
      display: 'flex',
      padding: 10,
      alignItems: 'center',
    }
  }

  const countTrimmed = (count / 1000).toFixed(1);

  return (
    <View testID={`stat:${name}`} style={styles.stat}>
      {count >= 1000 ?
      <Text fontWeight='bold'>{countTrimmed}k</Text>
      : <Text fontWeight='bold'>{count}</Text> 
      }
      <Text color='textSecondary' fontSize='subheading'>{name}</Text> 
    </View>
    
  );
};

export default StatInfo;