import { View } from 'react-native';
import StatInfo from './StatInfo';

const StatBar = ({ item }) => {

  const styles = {
    statBar: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexGrow: 1,
    }
  }

  return (
    <View style={styles.statBar}>
      <StatInfo name='Stars' count={item.stargazersCount} />
      <StatInfo name='Forks' count={item.forksCount} />
      <StatInfo name='Reviews' count={item.reviewCount} />
      <StatInfo name='Rating' count={item.ratingAverage} />
    </View>
  );
};

export default StatBar;