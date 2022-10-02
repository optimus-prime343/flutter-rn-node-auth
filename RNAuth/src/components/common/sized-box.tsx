import React, { ReactNode } from 'react'
import { View } from 'react-native'

export interface SizedBoxProps {
  width?: number
  height?: number
  children?: ReactNode
}
export const SizedBox = ({ width, height, children }: SizedBoxProps) => (
  <View style={{ width, height }}>{children}</View>
)
