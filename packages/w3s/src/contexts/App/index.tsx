import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useNetworkState } from "react-use"

interface IAppProps {
  /* Properties */
  isDrawerVisible: boolean
  isOnline: boolean

  /* Getters, Setters */
  setDrawerVisibility: (flag: boolean) => void
}

type AppProviderProps = PropsWithChildren<Partial<IAppProps>>

const initialAppProps: IAppProps = {
  isDrawerVisible: false,
  isOnline: false,
  setDrawerVisibility: () => {},
}

const AppContext = createContext<IAppProps>(initialAppProps)

const AppProvider: FC<AppProviderProps> = ({ children, ...props }) => {
  const { online } = useNetworkState()
  const [isOnline, setOnline] = useState<boolean>(online || false)

  const [isDrawerVisible, setDrawerVisibility] = useState<boolean>(false)

  useEffect(() => {
    setOnline(online || false)
  }, [online])

  const appContextProps: IAppProps = {
    isDrawerVisible,
    isOnline,
    setDrawerVisibility,
  }

  return (
    <AppContext.Provider
      value={{
        ...appContextProps,
        ...props,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => useContext(AppContext)

export { AppProvider, useApp }
