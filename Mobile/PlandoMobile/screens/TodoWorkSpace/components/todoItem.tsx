import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { useState } from 'react';
import todoApi from '../../../api/todoApi';
import { useData } from '../../../hooks/useData';
import { useAppSelector } from '../../../hooks/useSelector';

interface Props {
  item?: any;
}

const TodoItem = (props: Props) => {
  const userId = useAppSelector((state) => state.account.user._id);
  const { fetchData } = useData();
  const [isDone, SetIsDone] = useState<boolean>(props.item.isDone);
  const [isExpired, SetIsExpired] = useState<boolean>(
    new Date() > props.item.end ? true : false
  );

  const handleToggleIsDone = () => {
    if (isExpired || isDone) return;
    var func = setInterval(function () {
      SetIsDone((prev) => !prev);
    }, 1500);
    setTimeout(async () => {
      clearInterval(func), await updateDatabase();
    }, 2000);
  };

  const updateDatabase = async () => {
    const response = await todoApi.setDone({
      id: props.item._id,
      userId: userId
    });

    if (response.status != 200) console.log('Error Set Date');
    else {
      console.log('Set Date Successfully');
      await fetchData();
    }
  };

  return (
    <TouchableOpacity onPress={() => handleToggleIsDone()}>
      <View style={styles.todoItem_container}>
        <View style={styles.todoItem_frame}>
          <Text
            style={isDone ? styles.todoItem_title_done : styles.todoItem_title}
          >
            {props.item.title}
            <Text>{isExpired ? '(Expired)' : null}</Text>
          </Text>
          <Ionicons
            name="ios-alert-circle"
            size={20}
            color={
              props.item.point == 1
                ? '#68A794'
                : props.item.point == 2
                ? '#D9AD29'
                : 'maroon'
            }
          />
        </View>
        <Text style={styles.todoItem_body}>{props.item.body}</Text>
        <View style={styles.todoItem_line}></View>
      </View>
    </TouchableOpacity>
  );
};
export default TodoItem;
