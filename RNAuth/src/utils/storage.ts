import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const setStorageItem = (key: string, value: string) => storage.set(key, value)
const getStorageItem = (key: string) => storage.getString(key)

export { getStorageItem, setStorageItem }
