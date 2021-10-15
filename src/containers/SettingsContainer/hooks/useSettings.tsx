import { useState } from 'react'

import { useIsMounted } from '../../../hooks'
import { useAuth } from '../../../store'

export const useSettings = () => {
  const [isSignOut, setIsSignOut] = useState(false)

  const isMounted = useIsMounted()

  const { signOut, authData } = useAuth()

  const username = authData?.username ?? ''

  const onClickToSignOut = () => {
    setIsSignOut(true)
  }

  const onConfirmSignOut = () => {
    setIsSignOut(false)
    signOut()
  }

  const onCancelSignOut = () => {
    if (!isMounted.current) return
    setIsSignOut(false)
  }

  return {
    username,
    isSignOut,
    onClickToSignOut,
    onConfirmSignOut,
    onCancelSignOut,
  }
}
