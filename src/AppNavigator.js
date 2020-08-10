import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { generateStackScreen } from './helpers/navigation'

import PhoneSignIn from './screens/auth'
import VideoList from './screens/videos'

const Stack = createStackNavigator()
const routes = [
  {
    component: PhoneSignIn,
    name: 'Login',
    options: {
      headerShown: false
    }
  },
  {
    component: VideoList,
    name: 'VideoList',
    options: {
      title: 'Video List'
    }
  }
]

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {routes.map((screen, index) =>
          generateStackScreen({ index, ...screen, Stack })
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
