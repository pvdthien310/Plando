import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import todoApi from '../../api/todoApi';
import CusButton from '../../components/CusButton';
import { Text, View } from '../../components/Themed';
import { useData } from '../../hooks/useData';
import { useAppSelector } from '../../hooks/useSelector';
import { TodoWorkSpaceProps } from '../../navigation/types';
import RadioButton from './component/RadioButton';
import styles from './style';

export default function AddTodo({
  route,
  navigation
}: TodoWorkSpaceProps<'AddTodo'>) {
  const userId = useAppSelector((state) => state.account.user._id);
  const { fetchData } = useData();
  const [selectedType, SetSelectedType] = useState<Number>(1);
  const [tittle, SetTittle] = useState('');
  const [body, SetBody] = useState('');
  const [selectedDate, SetSelectedDate] = useState({
    start: new Date(),
    end: new Date()
  });

  const isValidField = useCallback((value?: string) => {
    return value && value.length > 0;
  }, []);

  const isValidDate = useCallback(
    (start: Date, end: Date) => {
      console.log(start);
      console.log(end);
      return end > start ? true : false;
    },
    [selectedDate]
  );

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const validateSave = useCallback(async () => {
    const isValidTitle = isValidField(tittle);
    const isValidBody = isValidField(body);
    const isValidSelectedDate = isValidDate(
      selectedDate.start,
      selectedDate.end
    );
    if (isValidTitle && isValidBody && isValidSelectedDate)
      await handleAddTodo()
    else
      Alert.alert(
        'Notification',
        'Missing or invalid information please check again!'
      );
  }, [tittle, isValidDate, isValidField, body, selectedDate]);

  const handleAddTodo = async () => {
    try {
      const response = await todoApi.addTodo({
        title: tittle,
        body: body,
        start: selectedDate.start,
        end: selectedDate.end,
        point: selectedType,
        sessionId: route.params?.session._id,
        accountId: userId
      });
      if (response.status == 200) {
        fetchData()
        Alert.alert('Notification', 'Add your to do successfully ! :33', [
          { text: 'OK' }
        ]);
      } else {
        Alert.alert('Notification', 'Error adding Todo!');
      }
    } catch (err) {
      Alert.alert('Notification', 'Error adding Todo!');
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.panel_1}>
          <Image
            style={styles.logo_app}
            source={require('../../assets/images/logo_.png')}
          ></Image>
          <View style={styles.panel_2}>
            <Text style={styles.title}>Add Todo</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <ScrollView style={styles.panel_3}>
          <Text style={styles.session_name}>{route.params?.session.name}</Text>
          <View style={styles.panel_3_frame}>
            <Text style={styles.panel_3_title}>Title</Text>
          </View>
          <TextInput
            multiline
            style={styles.panel_3_textfield}
            onChangeText={SetTittle}
          ></TextInput>
          <View style={styles.panel_3_frame}>
            <Text style={styles.panel_3_title}>Message</Text>
          </View>
          <TextInput
            multiline
            style={styles.panel_3_textfield_2}
            onChangeText={SetBody}
          ></TextInput>
          <View style={styles.panel_4_frame}>
            <Text style={styles.panel_4_title}>Start Date</Text>
            <RNDateTimePicker
              style={{ width: '40%' }}
              value={selectedDate.start}
              textColor={'black'}
              onChange={(e, value) =>
                SetSelectedDate((prev) => ({
                  ...prev,
                  start: value!
                }))
              }
            />
          </View>

          <View style={styles.panel_4_frame}>
            <Text style={styles.panel_4_title}>End Date</Text>
            <RNDateTimePicker
              style={{ width: '40%' }}
              value={selectedDate.end}
              textColor={'black'}
              onChange={(e, value) =>
                SetSelectedDate((prev) => ({
                  ...prev,
                  end: value!
                }))
              }
            />
          </View>
          <View style={styles.panel_5_frame}>
            <RadioButton
              selected={selectedType}
              title="Optional"
              index={1}
              toggleSelection={(e: Number) => SetSelectedType(e)}
              color="purple"
            />
            <RadioButton
              selected={selectedType}
              title="Normal"
              index={2}
              toggleSelection={(e: Number) => SetSelectedType(e)}
              color="#B6E9E0"
            />
            <RadioButton
              selected={selectedType}
              title="Important"
              index={3}
              toggleSelection={(e: Number) => SetSelectedType(e)}
              color="coral"
            />
          </View>
        </ScrollView>
        <CusButton
          buttonStyle={styles.addTodo_buttonSave}
          activeOpacity={0.8}
          textStyle={{ fontWeight: 'bold', color: 'white' }}
          buttonText="Submit"
          onPress={validateSave}
        ></CusButton>
        <CusButton
          buttonStyle={styles.addTodo_buttonClose}
          activeOpacity={0.8}
          textStyle={{ fontWeight: 'bold', color: 'white' }}
          buttonText="Cancel"
          onPress={() => navigation.goBack()}
        ></CusButton>
      </View>
    </TouchableWithoutFeedback>
  );
}
