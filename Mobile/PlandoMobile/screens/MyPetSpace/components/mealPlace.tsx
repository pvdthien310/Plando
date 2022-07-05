import { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const MealPlace = (props: any) => {
  const { meals } = props;
  return (
    <View style={styles.container_mealPlace}>
      {meals.length > 0 && (
        <View>
          <View
            style={{
              ...styles.frame_mealPlace,
              justifyContent: 'space-between',
              padding: 10
            }}
          >
            <TouchableOpacity>
              <View style={styles.frame_mealPlace}>
                <Image
                  style={styles.image_mealPlace}
                  source={{ uri: meals[0].url }}
                ></Image>
                <Text style={styles.text_mealPlace}>
                  {meals[0].price} coins
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.frame_mealPlace}>
                <Image
                  style={styles.image_mealPlace}
                  source={{ uri: meals[1].url }}
                ></Image>
                <Text style={styles.text_mealPlace}>
                  {meals[1].price} coins
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.frame_mealPlace,
              justifyContent: 'space-between',
              padding: 10
            }}
          >
            <TouchableOpacity>
              <View style={styles.frame_mealPlace}>
                <Image
                  style={styles.image_mealPlace}
                  source={{ uri: meals[2].url }}
                ></Image>
                <Text style={styles.text_mealPlace}>
                  {meals[2].price} coins
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.frame_mealPlace}>
                <Image
                  style={styles.image_mealPlace}
                  source={{ uri: meals[3].url }}
                ></Image>
                <Text style={styles.text_mealPlace}>
                  {meals[3].price} coins
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
export default memo(MealPlace);
