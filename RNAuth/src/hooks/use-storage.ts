import { MMKV } from 'react-native-mmkv'

export const useStorage = () => {
  const storage = new MMKV()

  const setItem = (key: string, value: string) => storage.set(key, value)
  const getItem = (key: string) => storage.getString(key)
  const deleteItem = (key: string) => storage.delete(key)

  return { setItem, getItem, deleteItem } as const
}
