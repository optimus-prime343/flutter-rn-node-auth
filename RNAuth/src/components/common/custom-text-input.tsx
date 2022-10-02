import React from 'react'
import { type Control, Controller, FieldValues } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native-paper'

export interface CustomTextInputProps<TFieldValues extends FieldValues = any>
  extends Omit<TextInputProps, 'theme'> {
  name: string
  control: Control<TFieldValues, any>
}
export const CustomTextInput = ({
  name,
  control,
  mode = 'outlined',
  ...rest
}: CustomTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        formState: { errors },
      }) => (
        <TextInput
          {...rest}
          mode={mode}
          onBlur={onBlur}
          value={value}
          onChangeText={onChange}
          error={Boolean(errors[name])}
        />
      )}
    />
  )
}
