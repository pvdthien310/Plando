import { useCallback, useMemo, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from './todoItem';

interface Props {
  item?: any;
  navigation: any;
}

const SessionItem = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [isDone, SetIsDone] = useState(false);

  const CheckIsDone = useMemo(async () => {
    if (props.item.todos.length == 0) return;
    let count = 0;
    await props.item.todos.map((ite: any) => {
      if (new Date() > ite.end || ite.isDone) {
      } else count++;
    });

    if (count == 0) SetIsDone(true);
  }, [props.item.todos]);

  const handleOpen = useCallback(() => {
    if (props.item.todos.length > 0) setOpen((prev) => !prev);
    else Alert.alert('Notification', "There's no task in session ! :((");
  }, [props]);

  return (
    <View style={styles.sessionItem_container}>
      <TouchableOpacity
        style={styles.sessionItem_touchableOpacity}
        activeOpacity={0.8}
        onPress={handleOpen}
      >
        <View style={styles.sessionItem_frame}>
          <Text
            style={
              !isDone ? styles.sessionItem_text : styles.sessionItem_text_done
            }
          >
            {props.item.name}
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AddTodo', {
                session: props.item
              })
            }
          >
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {open && props.item.todos.length > 0 && (
        <View style={styles.session_todoFrame}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.item.todos ? props.item.todos : []}
            renderItem={({ item }) => <TodoItem item={item} />}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
};

export default SessionItem;
