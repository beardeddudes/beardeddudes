import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useNetworkState } from "react-use"

interface IAppProps {
  /* Properties */
  isFormPopupVisible: boolean
  isOnline: boolean

  /* Getters, Setters */
  setFormPopupVisibility: (flag: boolean) => void
}

type AppProviderProps = PropsWithChildren<Partial<IAppProps>>

const initialAppProps: IAppProps = {
  isFormPopupVisible: false,
  isOnline: false,
  setFormPopupVisibility: () => {},
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
    isFormPopupVisible: isDrawerVisible,
    isOnline,
    setFormPopupVisibility: setDrawerVisibility,
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
