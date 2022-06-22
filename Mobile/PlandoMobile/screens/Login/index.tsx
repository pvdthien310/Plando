import { unwrapResult } from '@reduxjs/toolkit'
import { useCallback, useEffect, useState } from 'react'
import { Alert, AsyncStorage, Image, TouchableOpacity } from 'react-native'
import CusButton from '../../components/CusButton'
import CusOutlinedButton from '../../components/CusOutlinedButton'
import { CusTextField } from '../../components/CusTextField'
import { Text, View } from '../../components/Themed'
import { useAppDispatch } from '../../hooks/useDispatch'
import { RootNavigatorProps } from '../../navigation/types'
import { login, loginData } from '../../redux/slices/accountSlice'
import { OrPanel } from './child'
import styles from './style'

export default function Login({ navigation }: RootNavigatorProps<'Login'>) {
    const dispatch = useAppDispatch()
    const [userName, setUserName] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [errorUserName, setErrorUserName] = useState<string>()
    const [errorPassword, setErrorPassword] = useState<string>()

    const isValidField = useCallback((value?: string) => {
        return value && value.length > 0
    }, [])

    useEffect(() => {
        if (!isValidField(userName)) {
            setErrorUserName('Username is not correct!')
        }
    }, [userName, isValidField])

    useEffect(() => {
        if (!isValidField(password)) {
            setErrorPassword('Password is not correct!')
        }
    }, [password, isValidField])

    const validateUser = useCallback(() => {
        if (isValidField(userName)) {
            setErrorUserName(undefined)
            return true
        } else {
            setErrorUserName('Please provide user name!')
            return false
        }
    }, [isValidField, userName])

    const validatePassword = useCallback(() => {
        if (isValidField(password)) {
            setErrorPassword(undefined)
            return true
        } else {
            setErrorPassword('Please provide password!')
            return false
        }
    }, [isValidField, password])

    const loginHandler = useCallback(async () => {
        const data: loginData = {
            email: userName?.trim(),
            password: password?.trim(),
        }
        try {
            const resultAction = await dispatch(login(data!))
            const originalPromiseResult = unwrapResult(resultAction)
            if (originalPromiseResult) return true
            else return false
        } catch (rejectedValueOrSerializedError) {
            if (rejectedValueOrSerializedError != null) {
                return false
            }
        }
    }, [userName, password])

    const validateLogin = useCallback(async () => {
        const isValidUser = validateUser()
        const isValidPassword = validatePassword()
        const isCorrectAccount = await loginHandler()
        if (isValidUser && isValidPassword && isCorrectAccount)
            Alert.alert('Notification', 'Welcome back, my friend ! :33', [
                { text: 'OK', onPress: () => navigation.navigate('Root') },
            ])
        else
            Alert.alert(
                'Notification',
                "Login failed! Account's information is not correct!"
            )
    }, [userName, validateUser, validatePassword, loginHandler])

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo_app}
                source={require('../../assets/images/logo_.png')}
            ></Image>
            <Text style={styles.greetings_1}>
                Hello Newbie,
                <Text style={styles.greetings_2}> Welcom to Plando</Text>
            </Text>
            <Image
                style={styles.panel}
                source={require('../../assets/images/panel.png')}
            ></Image>
            <CusTextField
                value={userName}
                onChangeText={setUserName}
                placeholder="Username"
                error={errorUserName}
                onBlur={validateUser}
            ></CusTextField>
            <CusTextField
                value={password}
                placeholder="Password"
                onChangeText={setPassword}
                passwordType={true}
                error={errorPassword}
                onBlur={validatePassword}
            ></CusTextField>
            <CusButton
                onPress={validateLogin}
                activeOpacity={0.8}
                textStyle={{ fontWeight: 'bold', color: 'white' }}
                buttonText="Login"
            ></CusButton>
            <OrPanel />
            <CusOutlinedButton
                activeOpacity={0.5}
                textStyle={{ fontWeight: 'bold', color: '#1B6658' }}
                buttonText="Register"
                onPress={() => navigation.navigate('Register')}
            ></CusOutlinedButton>
            <TouchableOpacity
                style={styles.forgetPassword_Btn}
                onPress={() => navigation.navigate('ForgetPassword')}
                activeOpacity={0.8}
            >
                <Text style={styles.forgetPassword_TF}>
                    You dont remember password?
                </Text>
            </TouchableOpacity>
        </View>
    )
}
