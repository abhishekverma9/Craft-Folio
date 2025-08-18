import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

  const navigate = useNavigate()
  const {token} = useContext(AuthContext)
  return (
    <div className=' text-white'>
      <div className='grid grid-cols-1 md:grid-cols-[2fr_1.5fr] min-h-[80vh]'>
        {/* Left  */}
        <div className='flex flex-col items-center md:px-10 '>
            <h1 className='font-semibold text-3xl text-center sm:text-4xl py-10'>Build Your <span className=' text-yellow-500'>Dream Portfolio in Minutes</span></h1>
            <hr className='h-[1px] w-full opacity-30'/>
            <div className='py-10'>
              <h2 className='text-blue-100'>Showcase your skills, projects, and achievements with a beautiful, professional portfolio - no coding required. From students to professionals , CraftFolio helps you stand out with a portfolio that speaks for you.</h2>
              <div className='py-6 gap-y-4'>
                <h3 className='font-medium text-lg py-2'>Feature <span className=' text-yellow-500'>Highlights:</span></h3>
                <p><b>🎨 Customizable Designs -</b> Choose themes, colors, and layouts that match your style.</p>
                <p><b>⚡ Fast & Easy -</b> Create and publish in just a few clicks.</p>
                <p><b>📱 Responsive -</b> Looks perfect on desktop, tablet, and mobile.</p>
                <p><b>🔗 Share Anywhere -</b> Get a personal link to showcase your portfolio to employers, clients, or friends.</p>
              </div>
            </div>
             <hr className='h-[1px] w-full opacity-30'/>
            <div className='flex flex-col items-center gap-y-4 py-10'>
              <p>Start Building Today - Your work deserves to be seen.</p>
              <button onClick={()=>navigate('/info-form')} type="button" className="text-white w-full cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click Here</button>
            </div>
        </div>
        {/* Right  */}
        <div className='hidden md:flex items-center justify-center'>
            <img src="/img1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
