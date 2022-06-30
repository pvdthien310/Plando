import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { BottomNavigatorProps } from '../../navigation/types';

export default function PetShop({
  route,
  navigation
}: BottomNavigatorProps<'PetShop'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Tab Three Screen</Text>
      {route.params && <Text>{route.params['todoId']}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
