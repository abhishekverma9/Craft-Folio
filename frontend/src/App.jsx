import React, { useContext } from 'react'
import Footer from './components/Footer'
import {Navigate, Route,Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import InfoForm from './pages/InfoForm'
import NavbarPage from './components/NavbarPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import {ToastContainer} from 'react-toastify'
import { AuthContext } from './context/AuthContext'
import YourProjects from './pages/YourProjects'
import YourDetails from './pages/YourDetails'


const App = () => {
  const location = useLocation()
  const hideNavbarRoutes = ["/portfolio"];
  const {token} = useContext(AuthContext)
  return (
    <>
    <ToastContainer/>
    <div className="min-h-[80vh] inset-0 -z-10 h-full w-full items-center px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {!hideNavbarRoutes.includes(location.pathname) && <NavbarPage />}
      <Routes>
        <Route path='/' element={token ? <Home/> : <Navigate to={'/login'} />}/>
        <Route path='/login' element={!token ? <Login/>:<Navigate to={'/'} />}/>
        <Route path='/info-form' element={token ? <InfoForm/>:<Navigate to={'/login'} />}/>
        <Route path='/about' element={token ? <About/>:<Navigate to={'/login'} />}/>
        <Route path='/contact' element={token ? <Contact/>:<Navigate to={'/login'} />}/>
        <Route path='/portfolio' element={token ? <Portfolio/>:<Navigate to={'/login'} />}/>
        <Route path='/your-projects' element={token ? <YourProjects/>:<Navigate to={'/login'} />}/>
        <Route path='/your-details' element={token ? <YourDetails/>:<Navigate to={'/login'} />}/>
      </Routes>
    </div>
      {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App
