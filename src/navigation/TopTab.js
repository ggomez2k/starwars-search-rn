import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createMaterialBottomTabNavigator()
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
          tabBarIcon: ({ color }) => { return <Icon name='user' size={25} color={color} /> }
        }}
      />
      <Tab.Screen
        name='Channels'
        component={ChannelList}
        options={{
          tabBarLabel: 'Channels',
          tabBarIcon: ({ color }) => { return <Icon name='user' size={25} color={color} /> }
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Profile}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => { return <Icon name='user' size={25} color={color} /> }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
