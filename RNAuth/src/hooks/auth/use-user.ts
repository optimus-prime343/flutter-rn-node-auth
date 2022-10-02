import { useQuery } from '@tanstack/react-query'

import { REACT_QUERY_KEYS, URLS } from '../../constants'
import { User } from '../../types/user'
import { axiosClient } from '../../utils/axios-client'
import { useStorage } from '../use-storage'

export interface UserProfileResponse {
  data: User
}
export const useUser = () => {
  const { getItem } = useStorage()
  const token = getItem('token')
  return useQuery([REACT_QUERY_KEYS.user], () =>
    token
      ? axiosClient
          .get<UserProfileResponse>(URLS.auth.profile)
          .then(response => response.data.data)
          .catch(error => {
            throw new Error(
              error.response.data?.message ?? 'Something went wrong',
            )
          })
      : null,
  )
}
