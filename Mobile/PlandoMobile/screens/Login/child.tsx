import { Text, View } from 'react-native';
import styles from './style';

const OrPanel = () => {
  return (
    <View style={styles.or_panel}>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '30%'
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          margin: 10,
          fontWeight: 'bold'
        }}
      >
        OR
      </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '30%'
        }}
      />
    </View>
  );
};

export { OrPanel };
