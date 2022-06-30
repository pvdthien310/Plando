import { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#1B6658',
    borderRadius: 10,
    padding: 10,
    width: '65%',
    alignItems: 'center',
    marginTop: '3%'
  },
  textStyle: {
    fontSize: 30
  }
});

export type Props = TouchableOpacityProps & {
  buttonText?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const CusOutlinedButton: React.FC<Props> = ({
  buttonStyle = styles.button,
  buttonText = 'Button',
  textStyle = styles.textStyle,
  ...others
}) => {
  return (
    <TouchableOpacity style={buttonStyle} {...others}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CusOutlinedButton;
