import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sessionItem_container: {
    width: '100%',
    alignItems: 'center'
  },
  sessionItem_touchableOpacity: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    margin: 5,
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#A9E9E0',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.1
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  sessionItem_frame: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  sessionItem_text: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  },
  session_todoFrame: {
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
    shadowOpacity: 0.5
  },
  todoItem_container: {
    padding: 5,
    margin: 5
  },
  todoItem_frame: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todoItem_title: {
    color: '#29666A',
    fontWeight: 'bold',
    fontSize: 15
  },
  todoItem_line: {
    height: 2,
    backgroundColor: '#A9E9E0',
    width: '100%',
    marginTop: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 5
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  addSession_buttonClose: {
    backgroundColor: 'maroon',
    borderRadius: 10,
    padding: 10,
    width: '65%',
    alignItems: 'center',
    marginTop: '3%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  addSession_title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15
  },
  addSession_textfield: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: '3%',
    color: 'black'
  }
});
export default styles;
