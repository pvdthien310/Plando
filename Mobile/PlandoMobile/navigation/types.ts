import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// RootNavigator
export type RootNavigatorParamList = {
    Login: undefined
    Register: undefined
    ForgetPassword: undefined
    Root: NavigatorScreenParams<BottomNavigatorParamList> | undefined
    Modal: undefined
    NotFound: undefined
}

export type RootNavigatorProps<Screen extends keyof RootNavigatorParamList> =
    NativeStackScreenProps<RootNavigatorParamList, Screen>

// Bottom Navigator
export type BottomNavigatorParamList = {
    TodoStack:
        | NavigatorScreenParams<TodoWorkSpaceNavigatorParamList>
        | undefined
    PetStack: NavigatorScreenParams<PetSpaceNavigatorParamList> | undefined
    PetShop: undefined
    ProfileSpace: undefined
}

export type BottomNavigatorProps<
    Screen extends keyof BottomNavigatorParamList
> = CompositeScreenProps<
    BottomTabScreenProps<BottomNavigatorParamList, Screen>,
    NativeStackScreenProps<RootNavigatorParamList>
>

// Todo Workspace Navigator
export type TodoWorkSpaceNavigatorParamList = {
    TodoWorkSpace: undefined
    AddTodo: undefined
    EditTodo: undefined
    DetailTodo: { todoId: string } | undefined
}

export type TodoWorkSpaceProps<
    Screen extends keyof TodoWorkSpaceNavigatorParamList
> = CompositeScreenProps<
    NativeStackScreenProps<TodoWorkSpaceNavigatorParamList, Screen>,
    BottomTabScreenProps<BottomNavigatorParamList>
>

// Pet Space Navigator
export type PetSpaceNavigatorParamList = {
    MyPetSpace: undefined
    PetChange: undefined
}

export type PetSpaceProps<Screen extends keyof PetSpaceNavigatorParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<PetSpaceNavigatorParamList, Screen>,
        BottomTabScreenProps<BottomNavigatorParamList>
    >
