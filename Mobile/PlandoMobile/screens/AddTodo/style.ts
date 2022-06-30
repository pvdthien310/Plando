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
  },
  panel_3: {
    backgroundColor: 'white',
    height: '100%',
    width: '90%'
  },
  session_name: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B6E9E0'
  },
  panel_3_frame: {
    backgroundColor: '#B6E9E0',
    padding: 15,
    borderRadius: 5,
    marginTop: 15
  },
  panel_3_title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic'
  },
  panel_3_textfield: {
    borderWidth: 2,
    padding: 5,
    margin: 5,
    height: '15%',
    borderColor: '#B6E9E0'
  },
  panel_3_textfield_2: {
    borderWidth: 2,
    padding: 5,
    margin: 5,
    height: '30%',
    borderColor: '#B6E9E0'
  },
  panel_4_frame: {
    backgroundColor: '#B6E9E0',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  panel_4_title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
    alignSelf: 'center'
  },
  panel_5_frame: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    margin: 10,
    backgroundColor: 'white'
  },
  addTodo_buttonClose: {
    backgroundColor: 'maroon',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%'
  },
  addTodo_buttonSave: {
    backgroundColor: '#1B6658',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: '3%'
  }
});
export default styles;
