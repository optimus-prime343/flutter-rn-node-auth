import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ToastProvider } from 'react-native-toast-notifications'

import { useUser } from './hooks/auth/use-user'
import { Routes } from './routes'

const Main = () => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      }),
  )

  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <PaperProvider>
          <ToastProvider>
            <AuthWrapper />
          </ToastProvider>
        </PaperProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}
const AuthWrapper = () => {
  const { data: user, isLoading: isUserLoading } = useUser()

  return <Routes user={user ?? undefined} isLoading={isUserLoading} />
}

export default Main
