import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Landing from './pages/Landing';
import Layout from './Layout';
import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
