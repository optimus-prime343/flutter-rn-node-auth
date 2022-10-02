import { useMutation } from '@tanstack/react-query'

import { URLS } from '../../constants'
import { CreateUserPayload } from '../../types/user'
import { axiosClient } from '../../utils/axios-client'

export interface CreateUserResponse {
  message: string
}
export const useRegister = () => {
  return useMutation<string, Error, CreateUserPayload>(createUserPayload =>
    axiosClient
      .post<CreateUserResponse>(URLS.auth.register, createUserPayload)
      .then(response => response.data.message)
      .catch(error => {
        throw new Error(error.response.data?.message ?? 'Something went wrong')
      }),
  )
}
