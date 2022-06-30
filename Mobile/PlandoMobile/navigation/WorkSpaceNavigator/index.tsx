import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from '../../screens/AddTodo';
import DetailTodo from '../../screens/DetailTodo';
import EditTodo from '../../screens/EditTodo';
import TodoWorkSpace from '../../screens/TodoWorkSpace';
import { TodoWorkSpaceNavigatorParamList } from '../types';

const TodoStack = createNativeStackNavigator<TodoWorkSpaceNavigatorParamList>();

export const TodoWorkSpaceNavigator = () => {
  return (
    <TodoStack.Navigator initialRouteName="TodoWorkSpace">
      <TodoStack.Screen
        name="TodoWorkSpace"
        component={TodoWorkSpace}
        options={{ headerShown: false }}
      />
      <TodoStack.Screen
        name="AddTodo"
        component={AddTodo}
        options={{ headerShown: false }}
      />
      <TodoStack.Screen
        name="EditTodo"
        component={EditTodo}
        options={{ title: 'Edit Todo!' }}
      />
      <TodoStack.Screen
        name="DetailTodo"
        component={DetailTodo}
        options={{ title: 'Detail Todo!' }}
      />
    </TodoStack.Navigator>
  );
};
