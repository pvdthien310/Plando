import { useState } from "react"
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"

interface Props {
    item?: any
}

const SessionItem = (props : Props) => {
    const [open, setOpen] = useState(false)
    return (
        <View>
            <Text>{props.item.name}</Text>
            <TouchableOpacity>
                <Text onPress={() => setOpen(prev => !prev)}>Open</Text>
            </TouchableOpacity>
            {
                open &&
                <FlatList
                showsVerticalScrollIndicator={false}
                data={props.item.todos? props.item.todos : []}
                renderItem={({ item }) => (
                    <Text key={item._id} style={{color: 'black'}}>{item.body}</Text>
                )}
                keyExtractor={item => item._id}
            />
            }
        </View>
    )
}

export default SessionItem