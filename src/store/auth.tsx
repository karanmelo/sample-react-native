import React, { createContext, useState, useContext, useEffect } from 'react'

import AsyncStorage from '@react-native-community/async-storage'

import { AuthData, signIn as signInService } from '../services/auth'

type AuthContextData = {
  authData?: AuthData
  loading: boolean
  signIn(user: string, password: string): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData')
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized)
        setAuthData(_authData)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (user: string, password: string) => {
    const _authData: AuthData = await signInService({ user, password })

    setAuthData(_authData)

    AsyncStorage.setItem('@AuthData', JSON.stringify(_authData))
  }

  const signOut = async () => {
    setAuthData(undefined)

    await AsyncStorage.removeItem('@AuthData')
  }

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthContext, AuthProvider, useAuth }
