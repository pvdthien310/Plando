import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import CusButton from '../../components/CusButton';
import { Text, View } from '../../components/Themed';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { PetSpaceProps } from '../../navigation/types';
import { getMeals } from '../../redux/slices/mealSlice';
import { MealPlace } from './components';
import styles from './style';

export default function MyPetSpace({
  navigation
}: PetSpaceProps<'MyPetSpace'>) {
  const petList = useAppSelector((state) => state.account.user.pets);
  const dispatch = useAppDispatch();
  const [meals, SetMeals] = useState<any>([]);

  const [currentPet, SetCurrentPet] = useState(
    petList.filter((ite: any) => ite.beingUsed == true)[0]
  );
  const [nextLevel, SetNextLevel] = useState(
    Math.floor(currentPet.exp / 10 + 1) * 20
  );

  async function fetchMeal() {
    try {
      const resultAction = await dispatch(getMeals(undefined));
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult) {
        SetMeals(originalPromiseResult);
        return true;
      } else return false;
    } catch (rejectedValueOrSerializedError) {
      if (rejectedValueOrSerializedError != null) {
        return false;
      }
    }
  }

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    fetchMeal();
    return () => {
      cancel = true;
      SetMeals([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {currentPet.petTypeId.name} ( level {nextLevel / 20})
      </Text>
      <Image
        style={styles.pet_gif}
        resizeMode="contain"
        source={{ uri: currentPet.petTypeId.url }}
      />
      <Text style={styles.exp}>
        {currentPet.exp}/{nextLevel}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <MealPlace meals={meals} />
      <CusButton
        buttonStyle={styles.feedBtn}
        activeOpacity={0.8}
        textStyle={{ fontWeight: 'bold', color: 'white' }}
        buttonText="Feed"
      ></CusButton>
    </View>
  );
}
