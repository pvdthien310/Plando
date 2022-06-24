import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    sessionItem_container: {
        width: '100%',
        alignItems: 'center'
    },
    sessionItem_frame: {
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
    }

})
export default styles
