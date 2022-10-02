import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

export interface FullPageLoaderProps {
  loading?: boolean
  size?: number
}
export const FullPageLoader = ({
  loading = true,
  size = 75,
}: FullPageLoaderProps) => {
  return loading ? (
    <View style={styles.root}>
      <ActivityIndicator
        animating={true}
        color={MD2Colors.purple500}
        size={size}
      />
    </View>
  ) : null
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    color: MD2Colors.white,
  },
})
