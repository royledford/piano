import { createContext, useContext, useReducer, PropsWithChildren } from 'react'
import { DeviceState, DeviceActions } from '@/Types'
import { deviceReducer, deviceInitState } from './device-utils'

type ContextType = {
  state: DeviceState
  dispatch: React.Dispatch<DeviceActions>
}

const DeviceContext = createContext<ContextType>(null as unknown as ContextType)

// Define the provider that will be used to wrap in the app.
const DeviceProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(deviceReducer, deviceInitState)

  const value = { state, dispatch }

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  )
}

// Define a hook to access the context
function useDevice() {
  const context = useContext(DeviceContext)
  if (context === undefined) {
    throw new Error('useDevice must be used with a DeviceProvider')
  }

  return context
}

export { DeviceProvider, useDevice }
