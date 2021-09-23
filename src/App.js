import React from 'react'
import ImageSection from './components/ImageSection'
import Navbar from './components/Navbar'
import { GlobalUnsplashProvider } from './context/Unsplash'
import "./App.css"

const App = () => {
  return (
    <GlobalUnsplashProvider>
      <Navbar />
      <ImageSection />
    </GlobalUnsplashProvider>
  )
}

export default App
