import './App.css'
import Keyboard from '@/pages/Keyboard/Keyboard'
import { WebAudioProvider } from './providers/WebAudioProvider/webAudioProvider'

function App() {
  return (
    <WebAudioProvider>
      <Keyboard />
    </WebAudioProvider>
  )
}

export default App
