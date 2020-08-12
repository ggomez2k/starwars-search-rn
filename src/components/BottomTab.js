import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoList from '../screens/videos'
import ChannelList from '../screens/channels'
import Profile from '../screens/settings/Profile'

const Tab = createMaterialBottomTabNavigator()
const myIcon = (<Icon name='user' size={25} color='white' />)
const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor='black'
    >
      <Tab.Screen
        name='Videos'
        component={VideoList}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: () => (
            myIcon
          )
        }}
      />
      <Tab.Screen
        name='Channels'
        component={ChannelList}
        options={{
          tabBarLabel: 'Channels',
          tabBarIcon: () => (
            myIcon
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Profile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            myIcon
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
