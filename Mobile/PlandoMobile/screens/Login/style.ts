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
    backgroundColor: 'black'
  },
  logo_app: {
    height: '8%',
    width: '12%',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 10
  },
  greetings_1: {
    alignSelf: 'center',
    color: '#1B6658',
    fontWeight: 'bold',
    fontSize: 20
  },
  greetings_2: {
    fontSize: 20,
    color: 'black'
  },
  panel: {
    height: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  },
  userName_TF: {
    borderWidth: 1,
    borderRadius: 5,
    height: '5%',
    width: '70%',
    marginBottom: '3%',
    color: 'black',
    padding: 10
  },
  passWord_TF: {
    borderWidth: 1,
    borderRadius: 5,
    height: '5%',
    width: '70%',
    color: 'black',
    padding: 10
  },
  login_Btn: {
    backgroundColor: '#1B6658',
    borderRadius: 10,
    padding: 10,
    width: '65%',
    alignItems: 'center',
    marginTop: '3%'
  },
  register_Btn: {
    borderWidth: 2,
    borderColor: '#1B6658',
    borderRadius: 10,
    padding: 10,
    width: '65%',
    alignItems: 'center',
    marginTop: '3%'
  },
  forgetPassword_Btn: {
    margin: 5
  },
  forgetPassword_TF: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    color: 'lightslategray',
    margin: 4
  },
  or_panel: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3
  }
});
export default styles;
