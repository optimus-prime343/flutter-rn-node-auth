import { Link } from '@react-navigation/native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useToast } from 'react-native-toast-notifications'

import { CustomTextInput } from '../components'
import { SizedBox } from '../components/common/sized-box'
import { useRegister } from '../hooks'
import { ScreenProps } from '../types'

const RegisterScreen = ({ navigation }: ScreenProps<'register'>) => {
  const toast = useToast()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  const { mutate: registerMutate, isLoading: isRegistering } = useRegister()

  const onSubmit = handleSubmit(data =>
    registerMutate(
      { ...data },
      {
        onSuccess: message => {
          toast.show(message)
          navigation.navigate('login')
        },
        onError: error => toast.show(error.message),
      },
    ),
  )
  return (
    <View style={styles.root}>
      <CustomTextInput
        name="name"
        label="Name"
        placeholder="Enter your name"
        control={control}
      />
      <SizedBox height={10} />
      <CustomTextInput
        label="Email"
        placeholder="Enter your email address"
        name="email"
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
      <Button loading={isRegistering} mode="contained" onPress={onSubmit}>
        Confirm Registration
      </Button>
      <SizedBox height={20} />
      <Link style={styles.bottomText} to="/login">
        Already have an account? Login
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
export default RegisterScreen
