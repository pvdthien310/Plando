import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-end'
  },
  logo_app: {
    height: '70%',
    width: '20%'
  },
  panel_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 10,
    height: '10%',
    width: '100%',
    backgroundColor: 'white'
  },
  panel_2: {
    backgroundColor: 'white',
    width: '70%'
  },
  line: {
    height: '3%',
    width: '70%',
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginTop: '10%'
  }
});
export default styles;
