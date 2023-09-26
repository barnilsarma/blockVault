import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Logs from './components/Logs'
import Recent from './components/Recent'
import Share from './components/Share'
import Search from './components/Search'
import Uploads from './components/Uploads'
import Progress from './components/Progress'
import Dashboard from './pages/Dashboard'
import Notifications from './components/Notifications'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='/recent' element={<Recent />} />
        <Route path='/logs' element={<Logs />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/logs' element={<Logs />} />
        <Route path='/uploads' element={<Uploads />} />
        <Route path='/share' element={<Share />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>);
}

export default App
