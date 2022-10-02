import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

import { REACT_QUERY_KEYS } from '../../constants'
import { useStorage } from '../use-storage'

export const useLogout = () => {
  const queryClient = useQueryClient()
  const { deleteItem } = useStorage()
  return useCallback(() => {
    queryClient.setQueryData([REACT_QUERY_KEYS.user], null)
    deleteItem('token')
  }, [deleteItem, queryClient])
}
