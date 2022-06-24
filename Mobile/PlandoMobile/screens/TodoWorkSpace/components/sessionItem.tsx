import { useState } from "react"
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from "./todoItem";

interface Props {
    item?: any
}

const SessionItem = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.sessionItem_container}>
            <View style={styles.sessionItem_frame}>
                <Text style={styles.sessionItem_text}>{props.item.name}</Text>
                <TouchableOpacity onPress={() => setOpen(prev => !prev)}>
                    <FontAwesome name="plus" size={20} color="white" />
                </TouchableOpacity>

            </View>
            {
                open &&
                <View style={styles.session_todoFrame}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={props.item.todos ? props.item.todos : []}
                        renderItem={({ item }) => (
                            <TodoItem item={item} />
                        )}
                        keyExtractor={item => item._id}
                    />
                </View>
            }
        </View>
    )
}

export default SessionItem