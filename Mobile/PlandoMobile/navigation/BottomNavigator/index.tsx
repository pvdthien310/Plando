import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import {
  BottomNavigatorParamList,
  BottomNavigatorProps,
  PetSpaceProps
} from '../types';
import { FontAwesome5 } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import PetShop from '../../screens/PetShop';
import ProfileSpace from '../../screens/ProfileSpace';
import { TodoWorkSpaceNavigator } from '../WorkSpaceNavigator';
import { PetSpaceNavigator } from '../PetSpaceNavigator';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TodoStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <BottomTab.Screen
        name="TodoStack"
        component={TodoWorkSpaceNavigator}
        options={({ navigation }: BottomNavigatorProps<'TodoStack'>) => ({
          title: 'WorkSpace',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="network-wired" size={20} color="white" />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <FontAwesome5 name="network-wired" size={20} color="white" />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name="PetStack"
        component={PetSpaceNavigator}
        options={({ navigation }: any) => ({
          title: 'Pet Place',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="network-wired" size={20} color="white" />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  marginRight: 10,
                  opacity: pressed ? 0.5 : 1
                })}
              >
                <MaterialIcons name="pets" size={24} color="black" />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('PetChange')}
                style={({ pressed }) => ({
                  marginRight: 10,
                  opacity: pressed ? 0.5 : 1
                })}
              >
                <MaterialIcons name="pets" size={24} color="black" />
              </Pressable>
            </View>
          )
        })}
      />
      <BottomTab.Screen
        name="PetShop"
        component={PetShop}
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="network-wired" size={20} color="white" />
          )
        }}
      />
      <BottomTab.Screen
        name="ProfileSpace"
        component={ProfileSpace}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="network-wired" size={20} color="white" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};
