import { useState } from 'react'
import './App.scss'
import IntroPage from './components/IntroPage/IntroPage'
import HomePage from './components/HomePage/HomePage'

function App() {
  const [isIntroShow, setIsIntroShow] = useState<boolean>(true)

  return (
    <div className="app">
    {isIntroShow ? (<IntroPage setIsIntroShow={setIsIntroShow}/>): (<HomePage/>)}
    </div>
  )
}

export default App
