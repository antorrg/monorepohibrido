import {Routes, Route} from 'react-router-dom'
import * as View from './Index'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/form' element={<View.Landing/>}/>
      <Route path='/home' element={<View.Home/>}/>
      <Route path='/detail/:id' element={<View.Detail/>}/>
    </Routes>
    </>
  )
}

export default App
