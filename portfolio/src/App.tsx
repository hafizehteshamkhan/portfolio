import React, { useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero'
const App = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (
    <>
    <div>
      <p className='mt-[50px] text-center'>Hello ts</p>
      <Hero/>
    </div>
    </>
  )
}

export default App