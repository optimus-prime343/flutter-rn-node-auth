import { Link } from '@react-navigation/native'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useToast } from 'react-native-toast-notifications'

import { CustomTextInput } from '../components'
import { SizedBox } from '../components/common/sized-box'
import { REACT_QUERY_KEYS } from '../constants'
import { useLogin } from '../hooks'
import { useStorage } from '../hooks/use-storage'

const LoginScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const queryClient = useQueryClient()
  const toast = useToast()

  const { setItem } = useStorage()
  const { mutate: loginMutate, isLoading: isLoginLoading } = useLogin()

  const onSubmit = handleSubmit(data =>
    loginMutate(
      { ...data },
      {
        onSuccess: response => {
          setItem('token', response.data.token)
          queryClient.invalidateQueries([REACT_QUERY_KEYS.user])
          toast.show(response.message)
        },
        onError: error => toast.show(error.message, { type: 'error' }),
      },
    ),
  )

  return (
    <View style={styles.root}>
      <CustomTextInput
        name="email"
        label="Email"
        placeholder="Enter your email address"
        control={control}
      />
      <SizedBox height={10} />
      <CustomTextInput
        secureTextEntry
        name="password"
        label="Password"
        placeholder="Enter your password"
        control={control}
      />
      <SizedBox height={20} />
      <Button loading={isLoginLoading} onPress={onSubmit} mode="contained">
        Login
      </Button>
      <SizedBox height={20} />
      <Link style={styles.bottomText} to="/register">
        Dont have an account ? Register now
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  bottomText: {
    textAlign: 'center',
  },
})
export default LoginScreen
