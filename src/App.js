import React from 'react'
import ImageSection from './components/ImageSection'
import Navbar from './components/Navbar'
import { GlobalUnsplashProvider } from './context/Unsplash'
import "./App.css"
import CategoryNavbar from './components/Category/CategoryNavbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <GlobalUnsplashProvider>
      <Navbar />
      <CategoryNavbar />
      <ImageSection />
      <Footer />
    </GlobalUnsplashProvider>
  )
}

export default App
