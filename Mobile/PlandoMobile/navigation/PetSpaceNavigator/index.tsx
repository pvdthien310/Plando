import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyPetSpace from '../../screens/MyPetSpace'
import PetChange from '../../screens/PetChange'
import { PetSpaceNavigatorParamList } from '../types'

const PetStack = createNativeStackNavigator<PetSpaceNavigatorParamList>()

export const PetSpaceNavigator = () => {
    return (
        <PetStack.Navigator initialRouteName="MyPetSpace">
            <PetStack.Screen
                name="MyPetSpace"
                component={MyPetSpace}
                options={{ headerShown: false }}
            />
            <PetStack.Screen
                name="PetChange"
                component={PetChange}
                options={{ title: 'Pet Change' }}
            />
        </PetStack.Navigator>
    )
}
