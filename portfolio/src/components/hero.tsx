
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[350px] sm:min-h-[600px] flex flex-col items-center'>
        <div className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb16c5] rotate-45 z-0 right-2 top-28 rounded-3xl'>
        </div>
        <Navbar/>
    </div>
  )
}

export default Hero