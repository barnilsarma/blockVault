import React from 'react'
import Navbar from './Navbar'
import DashboardSideBar from './DashboardSideBar'
import Footer from './Footer'

const Uploads = () => {
  return (
    <div className='flex flex-col w-full'>
      <Navbar/>
      <section>
        <div></div>
      </section>
      <section className='flex justify-around items-center mb-16'>
        <DashboardSideBar/>
        <div className='border-2 h-[35rem] w-[75%]'>

        </div>
      </section>
      <section className='flex justify-around items-center mb-9'>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Files Transferred</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Size</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Uploaded</p>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Uploads

