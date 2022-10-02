import React, { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { SizedBox } from '../components/common/sized-box'
import { useLogout } from '../hooks'
import { useUser } from '../hooks/auth/use-user'
import { ScreenProps } from '../types'

const ProfileScreen = ({ navigation }: ScreenProps<'profile'>) => {
  const { data: user } = useUser()
  const logout = useLogout()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Welcome ${user?.name}`,
    })
  }, [navigation, user])

  return (
    <View style={styles.root}>
      <Text>Email : {user?.email}</Text>
      <SizedBox height={5} />
      <Text>Full name : {user?.name}</Text>
      <SizedBox height={15} />
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ProfileScreen
