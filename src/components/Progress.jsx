import React from 'react'
import Navbar from './Navbar'
import DashboardSideBar from './DashboardSideBar'

const Progress = () => {
  return (
    <div>
      <Navbar/>
      <section className='flex justify-around items-center '>
        <DashboardSideBar/>
        <div className='border-2 h-[39rem] w-[75%]'>

        </div>
      </section>
    </div>
  )
}

export default Progress
