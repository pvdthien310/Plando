import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useAppSelector } from '../../hooks/useSelector';
import { PetSpaceProps } from '../../navigation/types';
import styles from './style';

export default function MyPetSpace({
  navigation
}: PetSpaceProps<'MyPetSpace'>) {
  const petList = useAppSelector((state) => state.account.user.pets);

  const [currentPet, SetCurrentPet] = useState(
    petList.filter((ite: any) => ite.beingUsed == true)[0]
  );
  const [nextLevel, SetNextLevel] = useState(Math.floor((currentPet.exp / 10) + 1) * 20)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentPet.petTypeId.name}</Text>
      <Image
        style={styles.pet_gif}
        resizeMode="contain"
        source={{ uri: currentPet.petTypeId.url }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.exp}>{currentPet.exp}/{nextLevel}</Text>
    </View>
  );
}
