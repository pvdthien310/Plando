import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { PetSpaceProps } from '../../navigation/types';

export default function MyPetSpace({
  navigation
}: PetSpaceProps<'MyPetSpace'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My pet Space</Text>
      <Image source={require('../../assets/gifs/pet_1.gif')} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
