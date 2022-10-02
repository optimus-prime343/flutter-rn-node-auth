import { useMutation } from '@tanstack/react-query'

import { URLS } from '../../constants'
import { LoginUserPayload } from '../../types/user'
import { axiosClient } from '../../utils/axios-client'

export interface LoginResponse {
  message: string
  data: { token: string }
}
export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginUserPayload>(loginUserPayload =>
    axiosClient
      .post(URLS.auth.login, loginUserPayload)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error.response.data?.message ?? 'Something went wrong')
      }),
  )
}
