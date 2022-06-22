import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgetPassword from '../../screens/ForgetPassword'
import Login from '../../screens/Login'
import ModalScreen from '../../screens/ModalScreen'
import NotFoundScreen from '../../screens/NotFound'
import Register from '../../screens/Register'
import { BottomTabNavigator } from '../BottomNavigator'
import { RootNavigatorParamList } from '../types'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgetPassword"
                component={ForgetPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
export default RootNavigator
