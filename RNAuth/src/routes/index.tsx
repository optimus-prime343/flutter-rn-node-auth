import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { FullPageLoader } from '../components'
import LoginScreen from '../screens/login-screen'
import ProfileScreen from '../screens/profile-screen'
import RegisterScreen from '../screens/register-screen'
import { RootStackParamsList } from '../types'
import { User } from '../types/user'

const Stack = createNativeStackNavigator<RootStackParamsList>()

export interface RoutesProps {
  user?: User
  isLoading: boolean
}
export const Routes = ({ user, isLoading }: RoutesProps) => {
  if (isLoading) {
    return <FullPageLoader />
  }
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="profile"
            options={{ title: 'Profile' }}
            component={ProfileScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="register"
            options={{ title: 'Register' }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="login"
            options={{ title: 'Login' }}
            component={LoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
