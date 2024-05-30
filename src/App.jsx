import Navbar from './Components/Navbar';
import React from 'react'
import Search from './Components/Search';
import Category from './Components/Category';
import Joblist from './Components/Joblist';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Category />
      <Joblist />
      <Footer />
    </div >
  )
}

export default App
