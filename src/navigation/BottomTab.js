import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoList from '../screens/videos'
import VideoPlayer from '../screens/videos/VideoPlayer'
import ChannelList from '../screens/channels'
import ChannelDescription from '../screens/channels/ChannelDescription'
import Profile from '../screens/settings/Profile'
import Favorites from '../screens/settings/Favorites'
import WatchLater from '../screens/settings/WatchLater'
import History from '../screens/settings/History'
import Subscriptions from '../screens/settings/Subscriptions'

const Tab = createMaterialBottomTabNavigator()
const videosIcon = (<Icon name='film' size={23} color='white' />)
const channelsIcon = (<Icon name='th' size={23} color='white' />)
const settingsIcon = (<Icon name='gear' size={23} color='white' />)
const ProfileStack = createStackNavigator()
const SubscriptionStack = createStackNavigator()
const ChannelStack = createStackNavigator()
const VideoStack = createStackNavigator()

const Suscripciones = () => (
  <SubscriptionStack.Navigator>
    <SubscriptionStack.Screen name='Suscripciones' component={Subscriptions} options={{ headerShown: true }} />
  </SubscriptionStack.Navigator>
)

const Settings = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Perfil' component={Profile} options={{ headerShown: false }} />
    <ProfileStack.Screen name='Favoritos' component={Favorites} options={{ headerShown: true }} />
    <ProfileStack.Screen name='Ver más tarde' component={WatchLater} options={{ headerShown: true }} />
    <ProfileStack.Screen name='Historial' component={History} options={{ headerShown: true }} />
    <ProfileStack.Screen name='Suscripciones' component={Suscripciones} options={{ headerShown: false }} />
  </ProfileStack.Navigator>
)

const Channels = () => (
  <ChannelStack.Navigator>
    <ChannelStack.Screen name='Canales' component={ChannelList} options={{ headerShown: false }} />
    <ChannelStack.Screen name='ChannelDescription' component={ChannelDescription} options={{ title: '' }} />
  </ChannelStack.Navigator>
)

const Videos = () => (
  <VideoStack.Navigator>
    <VideoStack.Screen name='Videos' component={VideoList} options={{ headerShown: false }} />
    <VideoStack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown: true }} />
  </VideoStack.Navigator>
)

const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor='black'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name='Videos'
        component={Videos}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: () => (
            videosIcon
          )
        }}
      />
      <Tab.Screen
        name='Channels'
        component={Channels}
        options={{
          tabBarLabel: 'Channels',
          tabBarIcon: () => (
            channelsIcon
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
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
