import { createContext, useState, useContext, PropsWithChildren } from 'react'

type CtxType = {
  pressedKeys: string[]
  setPressedKeys: React.Dispatch<React.SetStateAction<string[]>>
}

const defaultValue = {
  pressedKeys: [],
  setPressedKeys: () => [],
}

const KeyboardContext = createContext<CtxType>(defaultValue)

// Define the provider that will be used to wrap in the app.
const KeyboardProvider = ({ children }: PropsWithChildren<{}>) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>(
    defaultValue.pressedKeys,
  )

  return (
    <KeyboardContext.Provider value={{ pressedKeys, setPressedKeys }}>
      {children}
    </KeyboardContext.Provider>
  )
}

// Define a hook to access the context
function useKeyboard() {
  const context = useContext(KeyboardContext)
  if (context === undefined) {
    throw new Error('useKeyboard must be used with a KeyboardProvider')
  }

  return context
}

export { KeyboardProvider, useKeyboard }
