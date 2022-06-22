import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'
import { TodoWorkSpaceProps } from '../../navigation/types'

export default function DetailTodo({
    route,
    navigation,
}: TodoWorkSpaceProps<'DetailTodo'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Todo</Text>
            {route.params && <Text>{route.params['todoId']}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
