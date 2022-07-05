import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useAppDispatch } from '../../hooks/useDispatch';
import { BottomNavigatorProps } from '../../navigation/types';
import { getPetTypes } from '../../redux/slices/petTypeSlice';

export default function PetShop({
  route,
  navigation
}: BottomNavigatorProps<'PetShop'>) {
  const dispatch = useAppDispatch();
  const [petTypes, SetPetType] = useState<any>([]);
  const [loading, SetLoading] = useState(false);

  async function fetchPetType() {
    try {
      SetLoading(true);
      const resultAction = await dispatch(getPetTypes(undefined));
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult) {
        SetPetType(originalPromiseResult);
        SetLoading(false);
        return true;
      } else return false;
    } catch (rejectedValueOrSerializedError) {
      if (rejectedValueOrSerializedError != null) {
        SetLoading(false);
        return false;
      }
    }
  }

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    fetchPetType();
    return () => {
      cancel = true;
      SetPetType([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      {petTypes.length > 0 && (
        <FlatList
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
          data={petTypes ? petTypes : []}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ margin: '10%', backgroundColor: 'white' }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  style={{ width: 100, height: 100, resizeMode: 'contain' }}
                  source={{ uri: item.url }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: '3%',
                    marginBottom: 10
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: 'black', alignItems: 'center' }}>
                  required level: {item.requiredLevel}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item) => item._id}
          onRefresh={() => fetchPetType()}
          refreshing={loading}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
