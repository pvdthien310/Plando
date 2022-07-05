import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
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
    fontWeight: 'bold',
    fontSize: 25
  },
  feedBtn: {
    backgroundColor: '#1B6658',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: '5%'
  }
});
export default styles;
