import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoList from '../screens/videos'
import ChannelList from '../screens/channels'
import Profile from '../screens/settings/Profile'

const Tab = createMaterialBottomTabNavigator()
const videosIcon = (<Icon name='film' size={23} color='white' />)
const channelsIcon = (<Icon name='th' size={23} color='white' />)
const settingsIcon = (<Icon name='gear' size={23} color='white' />)
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
            videosIcon
          )
        }}
      />
      <Tab.Screen
        name='Channels'
        component={ChannelList}
        options={{
          tabBarLabel: 'Channels',
          tabBarIcon: () => (
            channelsIcon
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Profile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            settingsIcon
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
