import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

interface Props {
    item?: any
}

const TodoItem = (props: Props) => {
    return (
        <View style={styles.todoItem_container}>
            <View style={styles.todoItem_frame}>
                <Text style={styles.todoItem_title}>{props.item.body}</Text>
                <Ionicons name="ios-alert-circle" size={20} color={
                    props.item.point == 1 ? "#68A794" :
                        props.item.point == 2 ? "#D9AD29" : "maroon"
                } />

            </View>
            <View style={styles.todoItem_line}></View>
        </View>
    )
}
export default TodoItem