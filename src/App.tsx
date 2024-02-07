import './App.css'
import Keyboard from '@/pages/Keyboard/Keyboard'
import { WebAudioProvider } from './providers/WebAudioProvider/webAudioProvider'
import { KeyboardProvider } from './providers/keyboard-provider'

function App() {
  return (
    <WebAudioProvider>
      <KeyboardProvider>
        <Keyboard />
      </KeyboardProvider>
    </WebAudioProvider>
  )
}

export default App
