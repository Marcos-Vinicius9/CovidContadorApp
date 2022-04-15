import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from './screens/Main';

import ScreenAbout from "./screens/ScreenAbout";

import Prevencao from "./screens/prevencao";


import colors from "./styles/colors";

function routes (){
    const Stack = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
             initialRouteName="Main"
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Sobre') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }else if(route.name === 'Contador'){
                    iconName = focused ? 'eye' : 'eye';
                  }else if(route.name === 'Prevencao'){
                    iconName = focused ? 'medkit' : 'medkit'
                  }
                  
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.backgroundColor,
                tabBarInactiveTintColor: 'black',
              })}
            >
                <Stack.Screen name="Contador" component={Main} options={{
                  headerShown:false,
                }}/>
                  <Stack.Screen name="Prevencao" component={Prevencao} options={{headerShown:false}} />
                <Stack.Screen name="Sobre" component={ScreenAbout} options={{
                  headerShown:false,
                  }}/>
                   
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default routes;