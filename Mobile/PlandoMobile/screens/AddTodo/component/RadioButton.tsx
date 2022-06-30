import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const RadioButton = (props: any) => {
  return (
    <TouchableOpacity
      style={
        props.selected == props.index
          ? { ...styles.frame1, backgroundColor: props.color }
          : { ...styles.frame, backgroundColor: props.color }
      }
      onPress={() => props.toggleSelection(props.index)}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default RadioButton;
