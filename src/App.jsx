import { useState } from 'react'
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Body from './Body'
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

function App() {
  const [count, setCount] = useState(0)

  console.log('test ---->',appStore)

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Body/>} >
            <Route path="/" element={<Feed/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
