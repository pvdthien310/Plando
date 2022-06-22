/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootNavigatorParamList } from './navigation/types'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootNavigatorParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined
    Modal: undefined
    NotFound: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>

/// khai bao cac man hinh
export type RootTabParamList = {
    TabOne: undefined
    TabTwo: undefined
    TabTwo1: NavigatorScreenParams<TodoTabParamList> | undefined
    TabTwo2: undefined
}

export type TodoTabParamList = {
    Workspace: undefined
    AddTodo: undefined
    EditTodo: undefined
    DetailTodo: { todoId: string } | undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >

export type TodoTabScreenProps<Screen extends keyof TodoTabParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<TodoTabParamList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >
