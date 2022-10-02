import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamsList = {
  profile: undefined
  login: undefined
  register: undefined
}
export type ScreenProps<key extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, key>
