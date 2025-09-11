import { createContext, useState, useEffect } from 'react'
import type { User } from '@/types/user'
import { getAccessTokenFromLS, getProfileFromLS, eventTargetLS } from '@/utils/auth'
import { useNavigate } from 'react-router-dom'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  reset: () => void
  //path: ReturnType<typeof buildPath>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  reset: () => null
  //path: buildPath(initialProfile?.role || null)
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  //const [path, setPath] = useState(buildPath(profile?.role || null))

  // Listen to localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const token = getAccessTokenFromLS()
      const userProfile = getProfileFromLS()
      setIsAuthenticated(Boolean(token))
      setProfile(userProfile)
    }

    // Listen to clearLS event
    const handleClearLS = () => {
      setIsAuthenticated(false)
      setProfile(null)
    }

    // Listen to authChange event (login)
    const handleAuthChange = () => {
      const token = getAccessTokenFromLS()
      const userProfile = getProfileFromLS()
      setIsAuthenticated(Boolean(token))
      setProfile(userProfile)
    }

    // Listen to storage events (for cross-tab sync)
    window.addEventListener('storage', handleStorageChange)

    // Listen to custom events
    eventTargetLS.addEventListener('clearLS', handleClearLS)
    eventTargetLS.addEventListener('authChange', handleAuthChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      eventTargetLS.removeEventListener('clearLS', handleClearLS)
      eventTargetLS.removeEventListener('authChange', handleAuthChange)
    }
  }, [])

  // useEffect(() => {
  //   // Mỗi khi profile thay đổi → cập nhật path
  //   setPath(buildPath(profile?.role ?? null))
  // }, [profile])

  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
    //setPath(buildPath(null))
    navigate('/login', { replace: true })
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile, reset }}>
      {children}
    </AppContext.Provider>
  )
}
