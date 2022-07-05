import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container_mealPlace: {
    borderRadius: 10,
    width: '80%',
    padding: 5,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginTop: 30
  },
  frame_mealPlace: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  image_mealPlace: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  text_mealPlace: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 5,
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: 'black'
  },
  pet_gif: {
    height: '50%',
    width: '70%'
  },
  exp: {
    color: 'black',
    fontWeight: 'bold'
  }
});
export default styles;
