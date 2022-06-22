import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import linking from './LinkingConfiguration'
import RootNavigator from './RootNavigator'

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={linking}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}
