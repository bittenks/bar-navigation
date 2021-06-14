import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./pages/home";
import New from './pages/new'
import Notification from "./pages/notification";
import Profile from "./pages/profile"
import Search from "./pages/search"

import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor:'#121212',
                borderTopColor:'transparent',
            },
            activeTintColor:'#fff',
            tabStyle:{
                paddingBottom:5,
                paddingTop:5,

            }
        }}>
            <Tab.Screen name='Inicio' component={Home} 
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name='home' size={size} color= {color}/>
                )
            }} />
            <Tab.Screen name='Buscar' component={Search}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Feather name='search' size={size} color= {color}/>
                )
            }}
              />
            <Tab.Screen name='Novo' component={New} 
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name='plus' size={size} color= {color}/>
                )
            }}
             />
            <Tab.Screen name='Notificacao' component={Notification}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name='notification' size={size} color= {color}/>
                )
            }}
              />
            <Tab.Screen name='Perfil' component={Profile}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Feather name='user' size={size} color= {color}/>
                )
            }}
              />
        
        </Tab.Navigator>
    )
}