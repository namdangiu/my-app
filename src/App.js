import React from 'react'
import './App.scss'

//custom component
import Appbar from 'components/Appbar/Appbar'
import Boardbar from 'components/Boardbar/Boardbar'
import BoardContent from 'components/BoardContent/BoardContent'

function App() {
  return (
    <div className="tranphuongnam-master">
      <Appbar />
      <Boardbar />
      <BoardContent/>
    </div>
  )
}

export default App
