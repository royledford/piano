import './App.css'
import Keyboard from '@/pages/Keyboard/Keyboard'
import { WebAudioProvider } from './providers/web-audio-provider'
import { KeyboardProvider } from './providers/keyboard-provider'
import { DeviceProvider } from './providers/device-provider'

function App() {
  return (
    <DeviceProvider>
      <WebAudioProvider>
        <KeyboardProvider>
          <Keyboard />
        </KeyboardProvider>
      </WebAudioProvider>
    </DeviceProvider>
  )
}

export default App
