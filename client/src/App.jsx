import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/Home'
import BookingConfirmation from './components/ConfirmBooking'
import NavigationBar from './components/NavigationBar'
import AboutPage from './components/About'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conferma" element={<BookingConfirmation />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

export default App
