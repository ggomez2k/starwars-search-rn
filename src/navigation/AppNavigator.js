import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { generateStackScreen } from '../helpers/navigation'
import BottomTab from './BottomTab'
import PhoneSignIn from '../screens/auth'

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
    component: BottomTab,
    name: 'BottomTab',
    options: {
      headerShown: false
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
