import styles from './style';
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { CusTextField } from '../../../components/CusTextField';
import CusButton from '../../../components/CusButton';
import sessionApi from '../../../api/sessionApi';
import { useAppSelector } from '../../../hooks/useSelector';

const AddTodoModal = (props: any) => {
  const [newSession, SetNewSession] = useState("")
  const [ErrorMessage, SetErrorMessage] = useState<any>("")
  const userId = useAppSelector(state => state.account.user._id)

  const isValidField = useCallback((value?: string) => {
    return value && value.length > 0
  }, [])

  useEffect(() => {
    if (!isValidField(newSession)) {
      SetErrorMessage('Session name is not allowed!')
    }
  }, [newSession, isValidField])

  const validateSession = useCallback(() => {
    if (isValidField(newSession)) {
      SetErrorMessage(undefined)
      return true
    } else {
      SetErrorMessage('Please provide session name!')
      return false
    }
  }, [isValidField, newSession])

  const AddSessionProcess = useCallback(async () => {
    try {
      const response = await sessionApi.addSession({
        name: newSession,
        accountId: userId
      })
      if (response.status == 200) {
        Alert.alert('Notification', 'Add Session Successfully', [
          { text: 'OK', onPress: () => props.setOpen(!props.open) },
        ])
        props.fetchData()
      }
      else
        Alert.alert(
          'Notification',
          "Information is not correct!"
        )
    }
    catch (err) {

    }
  }, [newSession])

  const handleAddSession = useCallback(async () => {
    const isValiadateSession = validateSession()
    if (isValiadateSession)
      await AddSessionProcess()
    else
      Alert.alert(
        'Notification',
        "Information is not correct!"
      )
  }, [newSession, validateSession])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.open}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setOpen(!props.open);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.addSession_title}>New Session</Text>
          <CusTextField
            textInputStyle={styles.addSession_textfield}
            value={newSession}
            onChangeText={SetNewSession}
            placeholder="New Session"
            error={ErrorMessage}
            onBlur={validateSession}
          ></CusTextField>
          <CusButton
            onPress={handleAddSession}
            activeOpacity={0.8}
            textStyle={{ fontWeight: 'bold', color: 'white' }}
            buttonText="Submit"
          ></CusButton>
          <CusButton
            buttonStyle={styles.addSession_buttonClose}
            onPress={() => props.setOpen(!props.open)}
            activeOpacity={0.8}
            textStyle={{ fontWeight: 'bold', color: 'white' }}
            buttonText="Cancel"
          ></CusButton>
        </View>
      </View>
    </Modal>
  );
};



export default AddTodoModal;